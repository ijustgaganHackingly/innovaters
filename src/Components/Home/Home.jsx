import  { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer/Footer";
import Grid from "../Grid/Grid";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const rightCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);


  const innovators = [
    {
      title: "Lead, Inspire and Innovate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,"
    },
    {
      title: "Lead, Inspire and Innovate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,"
    },
    {
      title: "Lead, Inspire and Innovate", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,"
    }
  ];

  const rows = 12;
  const cols = 20;
  const specialIndices = [6, 10, 12, 20, 45, 62, 90, 100];

  useEffect(() => {
    // Animations for the cards
    gsap.to(rightCardRef.current, {
      scrollTrigger: {
        trigger: rightCardRef.current,
        start: "top 53%",
        end: "bottom 8%",
        scrub: 2.5,
      },
      x: "100vw",
      y: "25vh",
      rotate: 15,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to(centerCardRef.current, {
      scrollTrigger: {
        trigger: centerCardRef.current,
        start: "top 53%",
        end: "bottom 38%",
        scrub: 2.5,
      },
      y: "-100vh",
      opacity: 0,
      duration: 0.1,
      ease: "power1.inOut",
    });

    gsap.to(leftCardRef.current, {
      scrollTrigger: {
        trigger: leftCardRef.current,
        start: "top 53%",
        end: "bottom 8%",
        scrub: 2.5,
      },
      x: "-100vw",
      y: "25vh",
      rotate: -15,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  const gridItems = Array.from({ length: rows * cols }, (_, index) => (
    <div
      key={index}
      className={`h-full w-full ${
        specialIndices.includes(index) ? "bg-[#312555]" : "bg-[#1d1441]"
      } border border-[#372b59]`}
    />
  ));

  return (
    <>
      <Navbar />
      <div className="h-[140vh] w-full relative top-0 overflow-hidden mt-0">
        {/* Grid background */}
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {gridItems}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 w-[60%] mt-[12%] ml-[20%]">
          <p className="text-center text-xl sm:text-5xl font-bold text-white mb-6">
            Holistic community platform for working professionals
          </p>
          <p className="text-center text-lg sm:text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="text-white bg-[#8162ff] rounded-full px-9 py-3 mt-5 ml-[41%] text-sm">
            Join Now
          </button>

          {/* Cards Section */}
          <div className="relative flex justify-center mt-12">
            {/* Left Card */}
            <div
              ref={leftCardRef}
              className="absolute left-0 transform -translate-x-24 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl h-[400px] w-[300px] p-6 pb-6 border border-[#372b59] mt-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-lg font-semibold">
                  Hackingly Campus Chapter
                </h2>
              </div>
              <div className="space-y-5 h-[300px] overflow-y-scroll scrollbar-hide">
                {[
                  "Amity University, Mumbai",
                  "JK Lakshmipat University, Jaipur",
                  "Panipat Institute of Engineering",
                  "Poornima University",
                  "University 5",
                  "University 6",
                  "University 7",
                  "University 8",
                  "University 9",
                  "University 10",
                ].map((university, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
                    <span className="text-white/90 text-sm">{university}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Card */}
            <div
              ref={centerCardRef}
              className="z-20 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[350px] p-6 border border-[#372b59] h-[400px] pb-6 opacity"
            >
              <h2 className="text-white text-lg font-semibold mb-6">
                Campus Leaderboard
              </h2>
              <div className="space-y-5 h-[300px] overflow-y-scroll scrollbar-hide">
                {[
                  {
                    name: "Anshuman Jain",
                    college: "Poornima College of Engineering",
                    trophy: "🏆",
                  },
                  {
                    name: "Gaurav Saxena",
                    college: "Poornima College of Engineering",
                    trophy: "🥈",
                  },
                  {
                    name: "Himanshu Singh",
                    college: "Saint John's University",
                    trophy: "🥉",
                  },
                  { name: "User 4", college: "College 4", trophy: "🎖" },
                  { name: "User 5", college: "College 5", trophy: "🎖" },
                  { name: "User 6", college: "College 6", trophy: "🎖" },
                  { name: "User 7", college: "College 6", trophy: "🎖" },
                  { name: "User 8", college: "College 6", trophy: "🎖" },
                  { name: "User 9", college: "College 6", trophy: "🎖" },
                  { name: "User 10", college: "College 6", trophy: "🎖" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl">{user.trophy}</span>
                    <div className="w-10 h-10 rounded-full bg-[#4c3575] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">{user.name}</p>
                      <p className="text-white/60 text-xs">{user.college}</p>
                    </div>
                  </div>
                ))}
                
              </div>
              <img 
                 src="../../../public/sport9.jpg"
                 alt="Trophy decoration"
                 className="absolute bottom-4 right-4 w-14 h-14 opacity-50"
               />
            </div>

            {/* Right Card */}
            <div
              ref={rightCardRef}
              className="absolute right-0 transform translate-x-24 mt-6 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[300px] h-[350px] p-6 border border-[#372b59] pb-6"
            >
              <h2 className="text-white text-lg font-semibold mb-6">
                Startup Community
              </h2>
              <div className="space-y-5 h-[250px] overflow-y-scroll scrollbar-hide">
                {["Startup-1", "Startup-2", "Startup-3", "Startup-4", "Startup-5", "Startup-6","Startup-7", "Startup-8", "Startup-9", "Startup-10",  ].map(
                  (startup, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
                      <span className="text-white/90 text-sm">{startup}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-full bg-[#1d1441] flex flex-col items-center justify-center z-50">
  {/* Rows with Grids */}
  <div className="relative w-full flex flex-col items-center justify-center">
    {/* Row 1 */}
    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(17, 1fr)",
        width: "80%",
      }}
    >
      {Array.from({ length: 17 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] aspect-square"
        />
      ))}
    </div>

    {/* Row 2 */}
    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(16, 1fr)",
        width: "76%",
      }}
    >
      {Array.from({ length: 16 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] aspect-square"
        />
      ))}
    </div>

    {/* Row 3 */}
    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(14, 1fr)",
        width: "70%",
      }}
    >
      {Array.from({ length: 14 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] aspect-square"
        />
      ))}
    </div>

    {/* Centered Text */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold pointer-events-none">
      Why Innovators?
    </div>
  </div>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-[80%] justify-center items-center">
    {innovators.map((item, index) => (
      <div key={index} className="text-white">
        <div className=" flex flex-row">
        <div className="bg-white w-8 h-8 mb-4"></div>
        <h3 className="text-xl font-medium mb-3 ml-3 flex">{item.title}</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</div>



      <div className="relative h-[300px] w-full bg-[#1d1441] flex flex-col items-center justify-center z-50">
  {/* Row 1 */}
  <div
    className="grid "
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "80%",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "76%",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "70%",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold ">
    Who Can Join Innovaters
  </div>
  


  
</div>

      <div className="relative h-[300px] w-full bg-[#1d1441] flex flex-col items-center justify-center z-50">
  {/* Row 1 */}
  <div
    className="grid "
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "80%",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "76%",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "70%",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] aspect-square"
      />
    ))}
  </div>

  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold">
    Top Events
  </div>


  
</div>

<div className="relative h-[300px] w-full bg-[#1d1441] flex flex-col items-center justify-center z-50">
  {/* Text Section */}
  <p className="text-center text-lg sm:text-2xl text-white mt-4">
    Join Innovators and Experience the Power of Our Community
  </p>

  {/* Button Section */}
  <button className="text-white bg-[#8162ff] rounded-full px-9 py-3 mt-5 text-sm sm:text-base">
    Join Now
  </button>
</div>



      {/* <div
  className="grid grid-cols-20 grid-rows-1 gap-4 h-20 w-full bg-[#1d1441]"
  style={{
    gridTemplateColumns: "repeat(20, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
  }}
>
  {Array.from({ length: 20 }, (_, index) => (
    <div
      key={index}
      className="bg-transparent border border-[#372b59] h-full w-full"
    />
  ))}
</div> */}

      <Footer />
    </>
  );
}

export default Home;


// import React, { useEffect, useRef } from "react";
// import Navbar from "../Navbar/Navbar";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "../Footer/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export function Home() {
//   const rightCardRef = useRef(null);
//   const leftCardRef = useRef(null);
//   const centerCardRef = useRef(null)
  
//   const rows = 12;
//   const cols = 20;
//   const specialIndices = [6, 10, 12, 20, 45, 62, 90, 100];

//   useEffect(() => {
//     // Create the animation for the right card
//     gsap.to(rightCardRef.current, {
//       scrollTrigger: {
//         trigger: rightCardRef.current,
//         start: "top 85%",
//         end: "bottom 5%",
//         scrub: 2.5,
//         smoothing: 0.1,
//       },
//       x: "100vw", // Move to the right
//       y: "25vh",  // Move down
//       rotate: 15,  // Slight rotation for effect
//       opacity: 0,  // Fade out
//       duration: 1, // Duration of the animation
//       ease: "power1.inOut"
//     });

//     gsap.to(centerCardRef.current,{
//         scrollTrigger:{
//             trigger: centerCardRef.current,
//             start: "top 80%",
//             end:"bottom 65%",
//             scrub: 2.5,
//             // smoothing: 0.1,
//         },
//         y: "-100vh", // Move up
//         opacity: 0, // Ensure it stays visible
//         duration: 0.1,
//         ease: "power1.inOut",
//     })

//     gsap.to(leftCardRef.current, {

//         scrollTrigger: {
//             trigger: leftCardRef.current,
//             start: "top 85%",
//             end: "bottom 5%",
//             scrub: 2.5,
//             smoothing: 0.1,
//         },
//         x: "-100vw",
//         y: "25vh",
//         rotate: -15,
//         opacity: 0,
//         duration: 1,
//         ease: "power1.inOut"
//       }
    
//       )
//   }, []);

  

//   const gridItems = Array.from({ length: rows * cols }, (_, index) => (
//     <div
//       key={index}
//       className={`h-full w-full ${
//         specialIndices.includes(index) ? "bg-[#312555]" : "bg-[#1d1441]"
//       } border border-[#372b59]`}
//     />
//   ));

//   return (
//     <>
//       <Navbar />
//       <div className="h-[140vh] w-full relative overflow-hidden mt-0">
//         {/* Grid background */}
//         <div
//           className="absolute inset-0 grid"
//           style={{
//             gridTemplateColumns: `repeat(${cols}, 1fr)`,
//             gridTemplateRows: `repeat(${rows}, 1fr)`,
//           }}
//         >
//           {gridItems}
//         </div>

//         {/* Content overlay */}
//         <div className="absolute inset-0 z-10 w-[60%] mt-[12%] ml-[20%]">
//           <p className="text-center text-xl sm:text-5xl font-bold text-white mb-6">
//             Holistic community platform for working professionals
//           </p>
//           <p className="text-center text-lg sm:text-2xl text-white">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>

//           <button className="text-white bg-[#4c3575] rounded-full px-9 py-3 mt-5 ml-[41%] text-xl">
//             Join Now
//           </button>

//           {/* Cards Section */}
//           <div className="relative flex justify-center mt-12">
//             {/* Left Card */}
//             <div ref={leftCardRef} className="absolute left-0 transform -translate-x-24 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[300px] p-6 pb-16 border border-[#372b59] mt-6"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-white text-lg font-semibold">Hackingly Campus Chapter</h2>
//               </div>
//               <div className="space-y-5">
//                 {[
//                   "Amity University, Mumbai",
//                   "JK Lakshmipat University, Jaipur",
//                   "Panipat Institute of Engineering"
//                 ].map((university, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
//                     <span className="text-white/90 text-sm">{university}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Center Card */}
//             <div ref={centerCardRef} className="z-20 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[350px] p-6 border border-[#372b59] pb-32 opacity"  >
//               <h2 className="text-white text-lg font-semibold mb-6">Campus Leaderboard</h2>
//               <div className="space-y-5">
//                 {[
//                   { name: "Anshuman Jain", college: "Poornima College of Engineering", trophy: "🏆" },
//                   { name: "Gaurav Saxena", college: "Poornima College of Engineering", trophy: "🥈" },
//                   { name: "Himanshu Singh", college: "Saint John's University", trophy: "🥉" }
//                 ].map((user, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <span className="text-2xl">{user.trophy}</span>
//                     <div className="w-10 h-10 rounded-full bg-[#4c3575] flex-shrink-0" />
//                     <div>
//                       <p className="text-white text-sm font-medium">{user.name}</p>
//                       <p className="text-white/60 text-xs">{user.college}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <img 
//                 src="../../../public/sport9.jpg"
//                 alt="Trophy decoration"
//                 className="absolute bottom-4 right-4 w-24 h-24 opacity-50"
//               />
//             </div>

//             {/* Right Card */}
//             <div 
//               ref={rightCardRef}
//               className="absolute right-0 transform translate-x-24 mt-6 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[300px] p-6 border border-[#372b59] pb-16"
//             >
//               <h2 className="text-white text-lg font-semibold mb-6">Startup Community</h2>
//               <div className="space-y-5">
//                 {["Startup-1", "Startup-2", "Startup-3"].map((startup, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
//                     <span className="text-white/90 text-sm">{startup}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className=" " ></div> */}
//       {/* shadow div */}
//       <div className="relative h-[1px] w-full bg-white shadow-2xl "></div>

//       {/* key segments innovaters div */}

//       <div className="h-[100vh] w-full bg-[#1d1441] flex justify-center">
//         <div className="text-white flex justify-center mt-28">
//           <h2 className="text-4xl font-bold mb-4">Key Segments of Innovaters</h2>
//           <div>
            
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default Home;