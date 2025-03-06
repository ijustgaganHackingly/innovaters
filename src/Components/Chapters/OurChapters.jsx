import React, { useState } from 'react';
import RoomIcon from '@mui/icons-material/Room';

const ChapterMarker = ({ top, left, label }) => {
  return (
    <div style={{
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
    }}>
      <div className="bg-white rounded-md shadow-md p-2 text-sm" style={{ whiteSpace: 'nowrap' }}>
        {label}
      </div>
    </div>
  );
};

// New component for map pins
const MapPin = ({ top, left }) => {
  return (
    <div style={{
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      transform: 'translate(-50%, -50%)',
      zIndex: 20
    }}>
      <RoomIcon style={{ color: '#5c44b9', fontSize: '24px' }} />
    </div>
  );
};

const ChapterLine = ({ x1, y1, x2, y2, dashed }) => {
  return (
    <svg style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 5
    }}>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7"
          refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>

      <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="black" strokeWidth="1" strokeDasharray={dashed ? "4" : ""}  />
    </svg>
  );
};

const OurChapters = () => {
  const [showEvents, setShowEvents] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Sample chapter data with events
  const chapterData = [
    {
      id: 1,
      location: "Manipal University Jaipur, Rajasthan",
      city: "Jaipur",
      state: "Rajasthan",
      events: [
        { id: 101, title: "Tech Conference 2025", date: "April 15, 2025" },
        { id: 102, title: "Coding Hackathon", date: "May 20, 2025" }
      ]
    },
    {
      id: 2,
      location: "IIT Delhi, New Delhi",
      city: "New Delhi",
      state: "Delhi",
      events: [
        { id: 201, title: "AI Workshop", date: "April 5, 2025" },
        { id: 202, title: "Startup Meetup", date: "June 10, 2025" }
      ]
    },
    {
      id: 3,
      location: "VIT Vellore, Tamil Nadu",
      city: "Vellore",
      state: "Tamil Nadu",
      events: [
        { id: 301, title: "Web Development Bootcamp", date: "March 25, 2025" },
        { id: 302, title: "Design Thinking Workshop", date: "May 5, 2025" }
      ]
    },
    {
      id: 4,
      location: "BITS Pilani, Rajasthan",
      city: "Pilani",
      state: "Rajasthan",
      events: [
        { id: 401, title: "Robotics Competition", date: "July 12, 2025" }
      ]
    },
    {
      id: 5,
      location: "IIT Guwahati, Assam",
      city: "Guwahati",
      state: "Assam",
      events: [
        { id: 501, title: "Blockchain Summit", date: "August 3, 2025" },
        { id: 502, title: "IoT Workshop", date: "September 15, 2025" }
      ]
    },
    {
      id: 6,
      location: "Anna University, Chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      events: [
        { id: 601, title: "Mobile App Development", date: "April 22, 2025" }
      ]
    }
  ];

  // Filter events based on search term
  const filteredEvents = chapterData
    .filter(chapter => 
      chapter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.events.some(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .flatMap(chapter => 
      chapter.events.map(event => ({
        ...event,
        location: chapter.location,
        city: chapter.city,
        state: chapter.state
      }))
    );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handleCheckEvents = () => {
    setShowEvents(!showEvents);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mb-10'>
        <h1 className='p-[9px] text-4xl'>Our Chapters</h1>
        <h3 className='text-base'>Unite, Inspire & grow with us.</h3>
      </div>

      <div className='flex flex-col relative items-center justify-center w-full mb-20'>
        <img src='/Map of India.svg' className='pl-40 relative'/>

        {/* Chapter Markers (Absolute Positioning) */}
        <ChapterMarker top={21} left={18} label="Manipal University Jaipur, Rajasthan" />
        <ChapterMarker top={34} left={18} label="BITS Pilani, Rajasthan" />
        <ChapterMarker top={42} left={18} label="IIT Delhi, New Delhi" />
        <ChapterMarker top={55} left={18} label="VIT Vellore, Tamil Nadu" />
        <ChapterMarker top={26} left={63} label="IIT Guwahati, Assam" />
        <ChapterMarker top={66.5} left={69} label="Anna University, Chennai" />

        {/* Connect with lines */}
        <ChapterLine x1={25} y1={21} x2={44} y2={21} dashed={true}/>
        <ChapterLine x1={25} y1={34} x2={40} y2={34} dashed={true}/>
        <ChapterLine x1={25} y1={42} x2={40} y2={42} dashed={true}/>
        <ChapterLine x1={22} y1={55} x2={38} y2={55} dashed={true}/>
        <ChapterLine x1={70} y1={27} x2={46.5} y2={27} dashed={true} />
        <ChapterLine x1={70} y1={67} x2={50} y2={67} dashed={true} />

        <MapPin top={21} left={44} />  
        <MapPin top={34} left={40} />  
        <MapPin top={42} left={40} />  
        <MapPin top={55} left={38} />  
        <MapPin top={27} left={46.5} /> 
        <MapPin top={67} left={50} /> 
      </div>

      <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-auto min-h-[40vh] w-full'>
        <div className='flex flex-col items-center justify-between'>
          <h2 className='text-5xl'>Find our event in your city!</h2>
          <div className='flex mt-6 relative'>
            <button 
              className='mr-[24px] rounded-[6px] border-[1px] py-[12px] px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white'
              onClick={handleCheckEvents}
            >
              {showEvents ? 'Hide events' : 'Check out all events'}
            </button>
            <div className="relative">
              <input 
                className='px-5 w-[360px] h-[44px] rounded-[6px] border-[1px]' 
                type='search' 
                placeholder='Search for your city or states'
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={() => searchTerm && setShowDropdown(true)}
              />
              
              {showDropdown && filteredEvents.length > 0 && (
                <div className="absolute w-full bg-white rounded-md shadow-lg mt-1 max-h-[300px] overflow-y-auto z-50">
                  {filteredEvents.map(event => (
                    <div key={event.id} className="p-3 hover:bg-gray-100 cursor-pointer border-b">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-600">{event.date} • {event.location}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {showEvents && (
          <div className="w-full max-w-4xl mt-10 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl mb-4 text-center text-[#5c44b9]">Our Chapters</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {chapterData.map(chapter => (
                  <div key={chapter.id} className="border rounded-md p-4">
                    <div className="flex items-center">
                      <RoomIcon style={{ color: '#5c44b9', marginRight: '8px' }} />
                      <h4 className="font-bold text-lg text-[#5c44b9]">{chapter.location}</h4>
                    </div>
                    
                    {chapter.events.length > 0 ? (
                      <div className="mt-2">
                        {chapter.events.map(event => (
                          <div key={event.id} className="mb-2 pb-2 border-b last:border-b-0">
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-gray-600">{event.date}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 mt-2">No upcoming events</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurChapters;

// import React from 'react';


// const ChapterMarker = ({ top, left, label }) => {
//   return (
//     <div style={{
//       position: 'absolute',
//       top: `${top}%`, // Use percentages for responsiveness
//       left: `${left}%`,
//       transform: 'translate(-50%, -50%)', // Center marker
//       zIndex: 10, // Ensure markers are on top
//     }}>
//       <div className="bg-white rounded-md shadow-md p-2 text-sm" style={{ whiteSpace: 'nowrap' }}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Manipal_Academy_of_Higher_Education_Logo.svg/1200px-Manipal_Academy_of_Higher_Education_Logo.svg.png" alt="Manipal University Logo" className="w-6 h-6 inline-block mr-1"/>
//         {label}
//       </div>
//       <div style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: '8px',
//         height: '8px',
//         // backgroundColor: 'red', // Marker color
//         borderRadius: '50%',
//         zIndex: 20
//       }}></div>
//     </div>
//   );
// };


// const ChapterLine = ({ x1, y1, x2, y2 }) => {
//   return (
//     <svg style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       pointerEvents: 'none', 
//       zIndex: 5 
//     }}>
//       <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="black" strokeWidth="1" strokeDasharray="4"/>
//     </svg>
//   );
// };

// const OurChapters = () => {
//   return (
//     <div>
//       <div className='flex flex-col items-center justify-center w-full mb-10'>
//         <h1 className='p-[9px] text-4xl'>Our Chapters</h1>
//         <h3 className='text-base'>Unite, Inspire & grow with us.</h3>
//       </div>

//       <div className='flex flex-col relative items-center justify-center  w-full mb-20'>

//         <img src='../../../public/Map of India.svg' className='pl-40 relative'/>

//            {/* Chapter Markers (Absolute Positioning) */}
//            <ChapterMarker top={25} left={25} label="Manipal University Jaipur, Rajasthan" />
//           {/* <ChapterMarker top={30} left={25} label="Manipal University Jaipur, Rajasthan" />
//           <ChapterMarker top={40} left={25} label="Manipal University Jaipur, Rajasthan" />
//            <ChapterMarker top={50} left={25} label="Manipal University Jaipur, Rajasthan" />
//           <ChapterMarker top={30} left={75} label="Manipal University Jaipur, Rajasthan" />
//           <ChapterMarker top={65} left={75} label="Manipal University Jaipur, Rajasthan" /> */}

//           {/* Connect with line */}
//           <ChapterLine x1={26} y1={21} x2={44} y2={21} />
//           {/* <ChapterLine x1={25} y1={30} x2={50} y2={20} />
//           <ChapterLine x1={25} y1={40} x2={45} y2={35} />
//           <ChapterLine x1={25} y1={50} x2={40} y2={50} />
//            <ChapterLine x1={75} y1={30} x2={60} y2={20} />
//            <ChapterLine x1={75} y1={65} x2={60} y2={60} /> */}
//       </div>

//       <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-[40vh] w-full'>
//         <div className='flex flex-col items-center justify-between'>
//           <h2 className='text-5xl'>Find our event in your city !</h2>
//           <div className='flex mt-6'>
//             <button className='mr-[24px] rounded-[6px] border-[1px] py-[12px] px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white'>
//               Check out all events
//             </button>
//             <input className='px-5 w-[360px]' type='search' placeholder='Search for your city or states' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurChapters;