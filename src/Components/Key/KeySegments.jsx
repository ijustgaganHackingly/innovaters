
import React from 'react';
import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';

const KeySegments = () => {
    return (
        <div className="relative h-auto w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#44376f] flex flex-col items-center justify-center pt-24">
  <h2 className="text-white text-4xl mt-12 mb-2 text-center">
    <SplitTextOnScroll
      text="Key Segments Of Innovators"
      textClassName="text-center pb-4 text-4xl text-white"
    />
  </h2>

  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-16 px-4">
    

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] mb-6 sm:mb-0 md:mt-8 ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
          <div className="p-4">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          Lorem ipsum.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] md:mt-8 ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
          <div className="p-4">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          Lorem ipsum.
        </p>
      </div>
    </div>
  </div>


  <div className="relative w-full h-auto overflow-hidden">
  {/* Dotted pattern container */}
  <div className="absolute inset-0">
    {[...Array(400)].map((_, index) => {
      const row = Math.floor(index / 20);
      const col = index % 20;
      return (
        <div
          key={index}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/10"
          style={{
            left: `${col * 5 + 2.5}%`,
            top: `${row * 5 + 2.5}%`,
          }}
        />
      );
    })}
  </div>

  {/* Content container */}
  <div className="relative z-10 p-6 space-y-8">
    {/* First Section */}
    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex flex-col md:flex-row bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
        {/* Left content */}
        <div className="flex-1 p-4 sm:p-6 md:p-12">
          <h2 className="text-blue-500 text-lg font-semibold mb-4">
            STUDENT COMMUNITY
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            Lorem ipsum.
          </p>
        </div>

        {/* Right section with gradient */}
        <div className="relative w-full md:w-2/5 bg-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
          <div className="p-4 sm:p-6 relative z-10">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Student community"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Second Section */}
    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex flex-col md:flex-row-reverse bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]">
        {/* Right content */}
        <div className="flex-1 p-4 sm:p-6 md:p-12">
          <h2 className="text-blue-500 text-lg font-semibold mb-4">
            STARTUP COMMUNITY
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            Lorem ipsum.
          </p>
        </div>

        {/* Left section with gradient */}
        <div className="relative w-full md:w-2/5 bg-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
          <div className="p-4 sm:p-6 relative z-10">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Startup community"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-16 px-4">
    

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] mb-6 sm:mb-0 md:mt-8">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
          <div className="p-4">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          Lorem ipsum.
        </p>
      </div>
    </div>

    <div className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] md:mt-8 ">
      <div className="mb-6">
        <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10 " />
          <div className="p-4">
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt="Campus meeting"
              className="w-[80%] ml-8 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
          CAMPUS LEADER
        </h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          Lorem ipsum.
        </p>
      </div>
    </div>
  </div>
</div>

</div>

    );
};

export default KeySegments;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitTextOnScroll from "../SplitText/SplitTextOnScroll";

// gsap.registerPlugin(ScrollTrigger);

// const KeySegments = ({ onScrollEnd }) => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let sections = gsap.utils.toArray(".card");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top", 
//         end: " top -120% ", // Adjust based on content length
//         pin: true,
//         scrub: 1,
//         onUpdate: (self) => {
//           if (self.progress > 0.99) {
//             onScrollEnd(); // Call function when last card is reached
//           }
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [onScrollEnd]);

//   return (
//     <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
//       <h2 className="text-white text-4xl text-center mt-12 mb-8">
//         <SplitTextOnScroll text="Key Segments Of Innovators" />
//       </h2>

//       <div
//         ref={sliderRef}
//         className="flex w-[400vw] space-x-6 px-8 overflow-hidden"
//       >
//         {/* Card 1 */}
//         <div className="card bg-[#1a1528]/95 w-screen sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 rounded-xl">
//           <h2 className="text-indigo-400 text-xl font-semibold mb-2">
//             CAMPUS LEADER
//           </h2>
//           <p className="text-white/80 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit...
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="card bg-[#1a1528]/95 w-screen sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 rounded-xl">
//           <h2 className="text-indigo-400 text-xl font-semibold mb-2">
//             STUDENT COMMUNITY
//           </h2>
//           <p className="text-white/80 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit...
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="card bg-[#1a1528]/95 w-screen sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 rounded-xl">
//           <h2 className="text-indigo-400 text-xl font-semibold mb-2">
//             STARTUP COMMUNITY
//           </h2>
//           <p className="text-white/80 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit...
//           </p>
//         </div>

//         {/* Card 4 - Last Card */}
//         <div className="card bg-[#1a1528]/95 w-screen sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 rounded-xl">
//           <h2 className="text-indigo-400 text-xl font-semibold mb-2">
//             ENTREPRENEURS
//           </h2>
//           <p className="text-white/80 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit...
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeySegments;





// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';

// gsap.registerPlugin(ScrollTrigger);

// const KeySegments = () => {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const container = containerRef.current;
//     const cards = cardsRef.current;
//     const containerHeight = container.offsetHeight;

//     // Set initial positions
//     cards.forEach((card, i) => {
//       gsap.set(card, {
//         y: `${containerHeight * i * 0.5}`,
//       });
//     });

//     // Create animation timeline
//     const animation = gsap.timeline();

//     cards.forEach((card, i) => {
//       animation.to(
//         card,
//         {
//           y: `-${containerHeight + card.offsetHeight}`,
//           duration: (i + 1) * 2,
//           ease: 'none',
//         },
//         0
//       );
//     });

//     // Create ScrollTrigger
//     ScrollTrigger.create({
//       animation: animation,
//       trigger: container,
//       start: 'top top',
//       end: `+=${cards.length * containerHeight * 0.5}`,
//       pin: true,
//       scrub: 1,
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative h-auto w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#44376f] flex flex-col items-center justify-center pt-24"
//     >
//       <h2 className="text-white text-4xl mt-12 mb-2 text-center">
//         <SplitTextOnScroll
//           text="Key Segments Of Innovators"
//           textClassName="text-center pb-4 text-4xl text-white"
//         />
//       </h2>

//       {/* Top cards */}
//       <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-16 px-4">
//         {[1, 2].map((_, index) => (
//           <div
//             key={`top-${index}`}
//             ref={el => (cardsRef.current[index] = el)}
//             className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] mb-6 sm:mb-0 md:mt-8"
//           >
//             <div className="mb-6">
//               <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
//                 <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
//                 <div className="p-4">
//                   <img
//                     src="/api/placeholder/400/320"
//                     alt="Campus meeting"
//                     className="w-[80%] ml-8 h-48 object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//               <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
//                 CAMPUS LEADER {index + 1}
//               </h2>
//               <p className="text-white/80 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Middle sections */}
//       <div className="relative w-full h-auto overflow-hidden">
//         <div className="absolute inset-0">
//           {[...Array(400)].map((_, index) => {
//             const row = Math.floor(index / 20);
//             const col = index % 20;
//             return (
//               <div
//                 key={index}
//                 className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/10"
//                 style={{
//                   left: `${col * 5 + 2.5}%`,
//                   top: `${row * 5 + 2.5}%`,
//                 }}
//               />
//             );
//           })}
//         </div>

//         {['STUDENT COMMUNITY', 'STARTUP COMMUNITY'].map((title, index) => (
//           <div
//             key={`middle-${index}`}
//             ref={el => (cardsRef.current[index + 2] = el)}
//             className="relative z-10 p-6 space-y-8 mb-6"
//           >
//             <div className="flex flex-wrap justify-center gap-6">
//               <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[#1a1528]/95 backdrop-blur-sm rounded-3xl overflow-hidden w-full max-w-[1024px]`}>
//                 <div className="flex-1 p-4 sm:p-6 md:p-12">
//                   <h2 className="text-blue-500 text-lg font-semibold mb-4">
//                     {title}
//                   </h2>
//                   <p className="text-white/80 text-sm leading-relaxed">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//                 <div className="relative w-full md:w-2/5 bg-purple-900/50">
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-600/30" />
//                   <div className="p-4 sm:p-6 relative z-10">
//                     <img
//                       src="/api/placeholder/400/320"
//                       alt={title.toLowerCase()}
//                       className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom cards */}
//       <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-16 px-4">
//         {[1, 2].map((_, index) => (
//           <div
//             key={`bottom-${index}`}
//             ref={el => (cardsRef.current[index + 4] = el)}
//             className="bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-full sm:w-[80%] md:w-[60%] lg:w-[470px] p-6 border border-[#372b59] mb-6 sm:mb-0 md:mt-8"
//           >
//             <div className="mb-6">
//               <div className="relative w-full overflow-hidden rounded-t-3xl bg-indigo-900">
//                 <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/20 transform skew-x-12 translate-x-20 z-10" />
//                 <div className="p-4">
//                   <img
//                     src="/api/placeholder/400/320"
//                     alt="Campus meeting"
//                     className="w-[80%] ml-8 h-48 object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//               <h2 className="text-indigo-400 text-xl font-semibold mb-2 mt-2">
//                 CAMPUS LEADER {index + 3}
//               </h2>
//               <p className="text-white/80 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KeySegments;