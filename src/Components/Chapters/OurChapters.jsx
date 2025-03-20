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
      <div className='hidden md:flex flex-col items-center justify-center w-full mb-10 '>
        <h1 className='p-[9px] font-[500] text-3xl'>Our Chapters</h1>
        <h3 className='text-base'>Unite, Inspire & grow with us.</h3>
      </div>

      <div className=' hidden md:flex flex-col relative items-center justify-center w-full mb-20'>
        <img src='/Map of India.svg' className='pl-40 relative'/>

        <ChapterMarker top={21} left={18} label="Manipal University Jaipur, Rajasthan" />
        <ChapterMarker top={34} left={18} label="BITS Pilani, Rajasthan" />
        <ChapterMarker top={42} left={18} label="IIT Delhi, New Delhi" />
        <ChapterMarker top={55} left={18} label="VIT Vellore, Tamil Nadu" />
        <ChapterMarker top={26} left={63} label="IIT Guwahati, Assam" />
        <ChapterMarker top={66.5} left={69} label="Anna University, Chennai" />

        <ChapterLine x1={25} y1={21} x2={44} y2={21} dashed={true}/>
        <ChapterLine x1={19} y1={34} x2={40} y2={34} dashed={true}/>
        <ChapterLine x1={25} y1={42} x2={40} y2={42} dashed={true}/>
        <ChapterLine x1={22} y1={55} x2={38} y2={55} dashed={true}/>
        <ChapterLine x1={60} y1={27} x2={46.5} y2={27} dashed={true} />
        <ChapterLine x1={70} y1={67} x2={50} y2={67} dashed={true} />

        <MapPin top={21} left={44} />  
        <MapPin top={34} left={40} />  
        <MapPin top={42} left={40} />  
        <MapPin top={55} left={38} />  
        <MapPin top={27} left={46.5} /> 
        <MapPin top={67} left={50} /> 
      </div>

      <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-auto min-h-[40vh] w-full px-4 py-6'>
      <div className='flex flex-col items-center justify-between w-full'>
        <h2 className='text-xl font-[500] md:text-2xl lg:text-3xl xl:text-4xl text-center '>Find our event in your city!</h2>
        
        <div className='flex flex-col sm:flex-row mt-6 relative w-full max-w-xl justify-center items-center gap-2'>
          <button
            className='mr-0 sm:mr-2 rounded-[6px] border-[1px] py-2 px-4 bg-gradient-to-r from-[#8b71fe] transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all to-[#7b59ff] text-white w-full sm:w-auto'
            onClick={handleCheckEvents}
          >
            {showEvents ? 'Hide events' : 'Check out all events'}
          </button>
          
          <div className="relative w-full sm:w-auto mt-4 sm:mt-0">
            <input
              className='px-5 w-full sm:w-[360px] h-[44px] rounded-[6px] border-[1px]'
              type='search'
              placeholder='Search for your city or states'
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={() => searchTerm && setShowDropdown(true)}
            />
            
            {showDropdown && filteredEvents.length > 0 && (
              <div className="absolute w-full bg-white rounded-md shadow-lg mt-1 max-h-[300px] overflow-y-auto z-50">
                {filteredEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="p-3 hover:bg-gray-100 cursor-pointer border-b"
                    onClick={() => {
                      setSearchTerm(event.location);
                      setShowDropdown(false);
                    }}
                  >
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.date} • {event.location}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {showEvents && (
          <div className="w-full max-w-4xl mt-10 mb-10 px-2 sm:px-4">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl mb-4 text-center text-[#5c44b9] font-semibold">Our Chapters</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {chapterData.map(chapter => (
                  <div key={chapter.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
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
    </div>
  );
};

export default OurChapters;
