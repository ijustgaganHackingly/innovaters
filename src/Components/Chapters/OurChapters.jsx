import React from 'react';

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
       {/* The connection point of the first line */}
       <div style={{
        position: 'absolute',
        top: '50%',
        left: '100%', /* Move dot to the right of the marker */
        transform: 'translate(-50%, -50%)',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        zIndex: 20
      }}></div>
    </div>
  );
};

const ChapterLine = ({ x1, y1, x2, y2 , dashed}) => {
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
      {/* <defs>
           <marker id="arrowhead" markerWidth="10" markerHeight="7"
              refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
      </defs> */}
      <defs>
           <marker id="locationIcon" markerWidth="12" markerHeight="12"  // Adjust sizing as needed
              refX="6" refY="6" orient="auto"> 
            {/*  Replace this with your actual image path */}
            <image href="" x="0" y="0" width="12" height="12" />
          </marker>
      </defs>

      <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="black" strokeWidth="1" strokeDasharray= {dashed ? "4" : "" } markerEnd="url(#arrowhead)"/>
    </svg>
  );
};

const OurChapters = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mb-10'>
        <h1 className='p-[9px] text-4xl'>Our Chapters</h1>
        <h3 className='text-base'>Unite, Inspire & grow with us.</h3>
      </div>

      <div className='flex flex-col relative items-center justify-center  w-full mb-20'>

        <img src='../../../public/Map of India.svg' className='pl-40 relative'/>

           {/* Chapter Markers (Absolute Positioning) */}
           <ChapterMarker top={21} left={18} label="Manipal University Jaipur, Rajasthan" />

           <ChapterMarker top={34} left={18} label="Manipal University Jaipur, Rajasthan" />

           <ChapterMarker top={42} left={18} label="Manipal University Jaipur, Rajasthan" />

           <ChapterMarker top={55} left={18} label="Manipal University Jaipur, Rajasthan" />

           <ChapterMarker top={26} left={63} label="Manipal University Jaipur, Rajasthan" />

           <ChapterMarker top={66.5} left={69} label="Manipal University Jaipur, Rajasthan" />

           
         

          {/* Connect with line */}
          <ChapterLine x1={25} y1={21} x2={44} y2={21} dashed = {true}/>
          <ChapterLine x1={25} y1={34} x2={40} y2={34} dashed = {true}/>
          <ChapterLine x1={25} y1={42} x2={40} y2={42} dashed = {true}/>
          <ChapterLine x1={22} y1={55} x2={38} y2={55} dashed = {true}/>
          <ChapterLine x1={70} y1={27} x2={46.5} y2={27} dashed={true} />
          <ChapterLine x1={70} y1={67} x2={50} y2={67} dashed={true} />
      </div>

      <div className='bg-gradient-to-r from-[#ffffff] via-[#f4f1ff] to-[#ffffff] flex flex-col items-center justify-center h-[40vh] w-full'>
        <div className='flex flex-col items-center justify-between'>
          <h2 className='text-5xl'>Find our event in your city !</h2>
          <div className='flex mt-6'>
            <button className='mr-[24px] rounded-[6px] border-[1px] py-[12px] px-[24px] bg-gradient-to-r from-[#8b71fe] to-[#7b59ff] text-white'>
              Check out all events
            </button>
            <input className='px-5 w-[360px]' type='search' placeholder='Search for your city or states' />
          </div>
        </div>
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