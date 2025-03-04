import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  const rightCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Grid setup
//   const rows = 12;
//   const cols = 20;
//   const specialIndices = [6, 10, 12, 20, 45, 62, 90, 100];
  
//   const gridItems = Array.from({ length: rows * cols }, (_, index) => (
//     <div
//       key={index}
//       className={`h-full w-full ${
//         specialIndices.includes(index) ? "bg-[#624da0]" : "bg-[#1d1441]"
//       } border border-[#372b59] opacity-20`}
//     />
//   ));

  useEffect(() => {
    let mm = gsap.matchMedia();

    // GSAP animations only for laptop and desktop (1024px and above)
    mm.add("(min-width: 1024px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const animations = [
        {
          element: rightCardRef.current,
          vars: {
            x: "100vw",
            y: "25vh",
            rotate: 50,
            opacity: 0,
          }
        },
        {
          element: centerCardRef.current,
          vars: {
            y: "-100vh",
            opacity: 0,
          }
        },
        {
          element: leftCardRef.current,
          vars: {
            x: "-100vw",
            y: "25vh",
            rotate: -50,
            opacity: 0,
          }
        }
      ];

      animations.forEach(({ element, vars }) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 53%",
            end: "bottom 8%",
            scrub: 2.5,
          },
          ...vars,
          duration: 1,
          ease: "power1.inOut",
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#1d1441] via-[#1a1545] to-[#52447ec3] 
        min-h-[210vh] 
        sm:min-h-[230vh] 
        md:min-h-[270vh] 
        lg:min-h-[160vh] 
        xl:min-h-[180vh]"
    >
      {/* Grid background */}
      {/* <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {gridItems}
      </div> */}

      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('../../../public/grid layers[1].png')", // Replace with your PNG path
        }}
      />

      <Navbar/>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 w-full px-4 md:px-8 lg:w-[80%] xl:w-[60%] mx-auto 
        pt-16 
        sm:pt-20 
        md:pt-[12%] 
        lg:pt-[15%] 
        xl:pt-[18%]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4 md:mb-6
            text-xl
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-5xl 
            font-bold text-white"
          >
            <SplitTextOnScroll
              text="Holistic community platform for working professionals"
              textClassName="text-white py-2"
            />
          </div>
          <div className="text-center 
            text-sm
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            xl:text-2xl 
            text-white"
          >
            <SplitTextOnScroll
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textClassName="text-white"
            />
          </div>

          <button className="text-white bg-[#8162ff] rounded-[6px] mx-auto block
            text-xs sm:text-sm md:text-base
            px-6 sm:px-8 md:px-12 lg:px-16
            py-2 sm:py-2.5 md:py-3
            mt-4 sm:mt-5 md:mt-6"
          >
            Join Now
          </button>
        </div>

        {/* Cards Section */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center 
          mt-8 sm:mt-10 md:mt-12 lg:mt-16
          gap-4 sm:gap-5 md:gap-6 lg:gap-0"
        >
          {/* Left Card */}
          <div
            ref={leftCardRef}
            className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
              bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
              p-3 sm:p-4 md:p-5 lg:p-6
              border border-[#372b59] 
              lg:absolute lg:left-0 lg:-translate-x-24 z-10"
          >
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">
                Hackingly Campus Chapter
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 
              h-[250px] sm:h-[275px] md:h-[300px] 
              overflow-y-scroll scrollbar-hide"
            >
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
                <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex-shrink-0" />
                  <span className="text-white/90 text-xs md:text-sm">{university}</span>
                </div>
              ))}
            </div>
          </div>

          

          {/* Center Card */}
          <div
            ref={centerCardRef}
            className="w-full sm:w-[350px] xl:w-[400px] bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-[#372b59] z-20"
          >
            <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">Campus Leaderboard</h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 h-[250px] sm:h-[275px] md:h-[300px] overflow-y-scroll scrollbar-hide">
              {[
                { name: 'Anshuman Jain', college: 'Poornima College of Engineering', trophyImage: '../../../public/medal-1.png' },
                { name: 'Gaurav Saxena', college: 'Poornima College of Engineering', trophyImage: '../../../public/medal-2.png' },
                { name: 'Himanshu Singh', college: 'Saint John\'s University', trophyImage: '../../../public/medal-3.png' },
                { name: "User 4", college: "College 4", trophy: "🎖" },
                { name: "Anirudh Jaiswal", college: "Poornima College of Engineering", trophy: "🎖" },
                { name: "User 6", college: "College 6", trophy: "🎖" },
                { name: "User 7", college: "College 6", trophy: "🎖" },
                { name: "User 8", college: "College 6", trophy: "🎖" },
                { name: "User 9", college: "College 6", trophy: "🎖" },
                { name: "User 10", college: "College 6", trophy: "🎖" },
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={user.trophyImage}
                    alt={`${user.name} trophy`}
                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#4c3575] flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs md:text-sm font-medium">{user.name}</p>
                    <p className="text-white/60 text-xs">{user.college}</p>
                  </div>
                </div>
              ))}
            </div>
            <img 
              src="/3d-gold-trophy-books-stack-graduation-cap 2.png"
              alt="Trophy decoration"
              className="absolute bottom-4 right-0 
                w-32 sm:w-18 md:w-28 lg:w-28 xl:w-32 
                h-32 sm:h-18 md:h-28 lg:h-28 xl:h-32 
                opacity-50"
            />
          </div>

          {/* Right Card */}
          <div
            ref={rightCardRef}
            className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
              bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
              p-3 sm:p-4 md:p-5 lg:p-6
              border border-[#372b59] 
              lg:absolute lg:right-0 lg:translate-x-24 z-10"
          >
            <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">
              Startup Community
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 
              h-[250px] sm:h-[275px] md:h-[300px] 
              overflow-y-scroll scrollbar-hide"
            >
              {["Startup-1", "Startup-2", "Startup-3", "Startup-4", "Startup-5", "Startup-6", "Startup-7", "Startup-8", "Startup-9", "Startup-10"].map(
                (startup, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex-shrink-0" />
                    <span className="text-white/90 text-xs md:text-sm">{startup}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';

// const HeroSection = () => {
//   const rightCardRef = useRef(null);
//   const leftCardRef = useRef(null);
//   const centerCardRef = useRef(null);
//   const sectionRef = useRef(null);
  
//   // Grid setup
//   const rows = 12;
//   const cols = 20;
//   const specialIndices = [6, 10, 12, 20, 45, 62, 90, 100];
  
//   const gridItems = Array.from({ length: rows * cols }, (_, index) => (
//     <div
//       key={index}
//       className={`h-full w-full ${
//         specialIndices.includes(index) ? "bg-[#624da0]" : "bg-[#1d1441]"
//       } border border-[#372b59] opacity-20`}
//     />
//   ));

//   useEffect(() => {
//     let mm = gsap.matchMedia();

//     // GSAP animations only for laptop and desktop (1024px and above)
//     mm.add("(min-width: 1024px)", () => {
//       gsap.registerPlugin(ScrollTrigger);

//       const animations = [
//         {
//           element: rightCardRef.current,
//           vars: {
//             x: "100vw",
//             y: "25vh",
//             rotate: 15,
//             opacity: 0,
//           }
//         },
//         {
//           element: centerCardRef.current,
//           vars: {
//             y: "-100vh",
//             opacity: 0,
//           }
//         },
//         {
//           element: leftCardRef.current,
//           vars: {
//             x: "-100vw",
//             y: "25vh",
//             rotate: -15,
//             opacity: 0,
//           }
//         }
//       ];

//       animations.forEach(({ element, vars }) => {
//         gsap.to(element, {
//           scrollTrigger: {
//             trigger: element,
//             start: "top 53%",
//             end: "bottom 8%",
//             scrub: 2.5,
//           },
//           ...vars,
//           duration: 1,
//           ease: "power1.inOut",
//         });
//       });

//       return () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       };
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <div 
//       ref={sectionRef}
//       className="relative overflow-hidden bg-gradient-to-b from-[#1d1441] via-[#1a1545] to-[#52447ec3] 
//         min-h-[260vh] 
//         sm:min-h-[280vh] 
//         md:min-h-[320vh] 
//         lg:min-h-[160vh] 
//         xl:min-h-[180vh]"
//     >
//       {/* Grid background */}
//       <div
//         className="absolute inset-0 grid"
//         style={{
//           gridTemplateColumns: `repeat(${cols}, 1fr)`,
//           gridTemplateRows: `repeat(${rows}, 1fr)`,
//         }}
//       >
//         {gridItems}
//       </div>

//       {/* Content overlay */}
//       <div className="absolute inset-0 z-10 w-full px-4 md:px-8 lg:w-[80%] xl:w-[60%] mx-auto 
//         pt-16 
//         sm:pt-20 
//         md:pt-[12%] 
//         lg:pt-[15%] 
//         xl:pt-[18%]"
//       >
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-4 md:mb-6
//             text-xl
//             sm:text-2xl 
//             md:text-3xl 
//             lg:text-4xl 
//             xl:text-5xl 
//             font-bold text-white"
//           >
//             <SplitTextOnScroll
//               text="Holistic community platform for working professionals"
//               textClassName="text-white"
//             />
//           </div>
//           <div className="text-center 
//             text-sm
//             sm:text-base 
//             md:text-lg 
//             lg:text-xl 
//             xl:text-2xl 
//             text-white"
//           >
//             <SplitTextOnScroll
//               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               textClassName="text-white"
//             />
//           </div>

//           <button className="text-white bg-[#8162ff] rounded-[6px] mx-auto block
//             text-xs sm:text-sm md:text-base
//             px-6 sm:px-8 md:px-12 lg:px-16
//             py-2 sm:py-2.5 md:py-3
//             mt-4 sm:mt-5 md:mt-6"
//           >
//             Join Now
//           </button>
//         </div>

//         {/* Cards Section */}
//         <div className="relative flex flex-col lg:flex-row justify-center items-center 
//           mt-8 sm:mt-10 md:mt-12 lg:mt-16
//           gap-4 sm:gap-5 md:gap-6 lg:gap-0"
//         >
//           {/* Left Card */}
//           <div
//             ref={leftCardRef}
//             className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
//               bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
//               p-3 sm:p-4 md:p-5 lg:p-6
//               border border-[#372b59] 
//               lg:absolute lg:left-0 lg:-translate-x-24 z-10"
//           >
//             <div className="flex justify-between items-center mb-4 md:mb-6">
//               <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">
//                 Hackingly Campus Chapter
//               </h2>
//             </div>
//             <div className="space-y-3 sm:space-y-4 md:space-y-5 
//               h-[250px] sm:h-[275px] md:h-[300px] 
//               overflow-y-scroll scrollbar-hide"
//             >
//               {[
//                 "Amity University, Mumbai",
//                 "JK Lakshmipat University, Jaipur",
//                 "Panipat Institute of Engineering",
//                 "Poornima University",
//                 "University 5",
//                 "University 6",
//                 "University 7",
//                 "University 8",
//                 "University 9",
//                 "University 10",
//               ].map((university, index) => (
//                 <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                   <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex-shrink-0" />
//                   <span className="text-white/90 text-xs md:text-sm">{university}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Center Card */}
//           <div
//             ref={centerCardRef}
//             className="w-full sm:w-[350px] xl:w-[400px] 
//               bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
//               p-3 sm:p-4 md:p-5 lg:p-6
//               border border-[#372b59] z-20"
//           >
//             <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">
//               Campus Leaderboard
//             </h2>
//             <div className="space-y-3 sm:space-y-4 md:space-y-5 
//               h-[250px] sm:h-[275px] md:h-[300px] 
//               overflow-y-scroll scrollbar-hide"
//             >
//               {[
//                 {
//                   name: "Anshuman Jain",
//                   college: "Poornima College of Engineering",
//                   trophy: "🏆",
//                 },
//                 {
//                   name: "Gaurav Saxena",
//                   college: "Poornima College of Engineering",
//                   trophy: "🥈",
//                 },
//                 {
//                   name: "Himanshu Singh",
//                   college: "Saint John's University",
//                   trophy: "🥉",
//                 },
//                 { name: "User 4", college: "College 4", trophy: "🎖" },
//                 { name: "User 5", college: "College 5", trophy: "🎖" },
//                 { name: "User 6", college: "College 6", trophy: "🎖" },
//                 { name: "User 7", college: "College 6", trophy: "🎖" },
//                 { name: "User 8", college: "College 6", trophy: "🎖" },
//                 { name: "User 9", college: "College 6", trophy: "🎖" },
//                 { name: "User 10", college: "College 6", trophy: "🎖" },
//               ].map((user, index) => (
//                 <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                   <span className="text-lg sm:text-xl md:text-2xl">{user.trophy}</span>
//                   <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-[#4c3575] flex-shrink-0" />
//                   <div>
//                     <p className="text-white text-xs md:text-sm font-medium">{user.name}</p>
//                     <p className="text-white/60 text-xs">{user.college}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <img 
//               src="/3d-gold-trophy-books-stack-graduation-cap 2.png"
//               alt="Trophy decoration"
//               className="absolute bottom-4 right-4 
//                 w-16 sm:w-18 md:w-20 lg:w-24 xl:w-28 
//                 h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 
//                 opacity-50"
//             />
//           </div>

//           {/* Right Card */}
//           <div
//             ref={rightCardRef}
//             className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
//               bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
//               p-3 sm:p-4 md:p-5 lg:p-6
//               border border-[#372b59] 
//               lg:absolute lg:right-0 lg:translate-x-24 z-10"
//           >
//             <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">
//               Startup Community
//             </h2>
//             <div className="space-y-3 sm:space-y-4 md:space-y-5 
//               h-[250px] sm:h-[275px] md:h-[300px] 
//               overflow-y-scroll scrollbar-hide"
//             >
//               {["Startup-1", "Startup-2", "Startup-3", "Startup-4", "Startup-5", "Startup-6", "Startup-7", "Startup-8", "Startup-9", "Startup-10"].map(
//                 (startup, index) => (
//                   <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                     <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex-shrink-0" />
//                     <span className="text-white/90 text-xs md:text-sm">{startup}</span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;