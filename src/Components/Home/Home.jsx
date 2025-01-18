import  { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer/Footer";
import EventCards from "../Card/EventCard";
import SplitTextOnScroll from "../SplitText/SplitTextOnScroll";
import KeySegments from "../Key/KeySegments";
import HeroSection from "../hero/HeroSection";
// import GridPatternCTA from "../GridPattern/GridPatternCta";
// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { MapPin, Calendar } from 'lucide-react'
// import Grid from "../Grid/Grid";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  // const rightCardRef = useRef(null);
  // const leftCardRef = useRef(null);
  // const centerCardRef = useRef(null);


  


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

  // const rows = 12;
  // const cols = 20;
  // const specialIndices = [6, 10, 12, 20, 45, 62, 90, 100];

  // useEffect(() => {
  //   // Animations for the cards
  //   gsap.to(rightCardRef.current, {
  //     scrollTrigger: {
  //       trigger: rightCardRef.current,
  //       start: "top 53%",
  //       end: "bottom 8%",
  //       scrub: 2.5,
  //     },
  //     x: "100vw",
  //     y: "25vh",
  //     rotate: 15,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });

    

  //   gsap.to(centerCardRef.current, {
  //     scrollTrigger: {
  //       trigger: centerCardRef.current,
  //       start: "top 53%",
  //       end: "bottom 38%",
  //       scrub: 2.5,
  //     },
  //     y: "-100vh",
  //     opacity: 0,
  //     duration: 0.1,
  //     ease: "power1.inOut",
  //   });

  //   gsap.to(leftCardRef.current, {
  //     scrollTrigger: {
  //       trigger: leftCardRef.current,
  //       start: "top 53%",
  //       end: "bottom 8%",
  //       scrub: 2.5,
  //     },
  //     x: "-100vw",
  //     y: "25vh",
  //     rotate: -15,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  // const gridItems = Array.from({ length: rows * cols }, (_, index) => (
  //   <div
  //     key={index}
  //     className={`h-full w-full ${
  //       specialIndices.includes(index) ? "bg-[#624da0]" : "bg-[#1d1441]"
  //     } border border-[#372b59] opacity-20`}
  //   />
  // ));

  return (
    <>
      <Navbar />

      <HeroSection/>

     
      

<KeySegments/>

     

      <div className="relative h-[600px] sm:h-[600px] md:h-[550px] lg:h-[500px] w-full bg-gradient-to-t from-[#52447ec3] via-[#2b1d5c] to-[#1d1441] flex flex-col items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
  {/* Rows with Grids */}
  <div className="relative w-full flex flex-col items-center justify-center mb-4">
    {/* Row 1 */}
    <div
      className="grid mt-4 relative"
      style={{
        gridTemplateColumns: "repeat(17, 1fr)",
        width: "95%",
        "@media (min-width: 640px)": { width: "90%" },
        "@media (min-width: 768px)": { width: "85%" },
        "@media (min-width: 1024px)": { width: "80%" },
      }}
    >
      {Array.from({ length: 17 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    {/* Row 2 */}
    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(16, 1fr)",
        width: "90%",
        "@media (min-width: 640px)": { width: "85%" },
        "@media (min-width: 768px)": { width: "80%" },
        "@media (min-width: 1024px)": { width: "76%" },
      }}
    >
      {Array.from({ length: 16 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    {/* Row 3 */}
    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(14, 1fr)",
        width: "85%",
        "@media (min-width: 640px)": { width: "80%" },
        "@media (min-width: 768px)": { width: "75%" },
        "@media (min-width: 1024px)": { width: "70%" },
      }}
    >
      {Array.from({ length: 14 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    {/* Centered Text */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-full px-4">
      <SplitTextOnScroll
        text="Why Innovaters"
        textClassName="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white"
      />
    </div>
  </div>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4 sm:mt-6 lg:mt-8 w-[90%] sm:w-[85%] lg:w-[80%] justify-center items-start">
    {innovators.map((item, index) => (
      <div key={index} className="text-white">
        <div className="flex flex-row items-center">
          <div className="bg-white w-6 h-6 sm:w-8 sm:h-8 mb-4"></div>
          <h3 className="text-lg sm:text-xl font-medium mb-3 ml-3 flex">{item.title}</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</div>



<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  {/* Row 1 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "95%",
      "@media (min-width: 640px)": { width: "90%" },
      "@media (min-width: 768px)": { width: "85%" },
      "@media (min-width: 1024px)": { width: "80%" },
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "90%",
      "@media (min-width: 640px)": { width: "85%" },
      "@media (min-width: 768px)": { width: "80%" },
      "@media (min-width: 1024px)": { width: "76%" },
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "85%",
      "@media (min-width: 640px)": { width: "80%" },
      "@media (min-width: 768px)": { width: "75%" },
      "@media (min-width: 1024px)": { width: "70%" },
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full px-4">
    <SplitTextOnScroll
      text="Who Can Join Innovaters"
      textClassName="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white"
    />
  </div>
</div>

<div className="w-full p-4 sm:p-6 lg:p-8 relative h-auto sm:h-[400px] md:h-[300px] lg:h-[250px] bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div className="flex flex-col sm:flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
    {/* Working Professionals Card */}
    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Working Professionals"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-8 md:px-10 lg:px-12 py-2 bg-white/40 backdrop-blur-md rounded-full">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Working Professionals
        </span>
      </button>
    </div>

    {/* Students Card */}
    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Students"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-12 md:px-16 lg:px-20 py-2 bg-white/10 backdrop-blur-md rounded-full">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Students
        </span>
      </button>
    </div>

    {/* Startup Founders Card */}
    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
        alt="Startup Founders"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-8 md:px-10 lg:px-12 py-2 bg-white/10 backdrop-blur-md rounded-full">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Startup Founders
        </span>
      </button>
    </div>
  </div>
</div>

    <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  {/* Row 1 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "95%",
      "@media (min-width: 640px)": { width: "90%" },
      "@media (min-width: 768px)": { width: "85%" },
      "@media (min-width: 1024px)": { width: "80%" },
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "90%",
      "@media (min-width: 640px)": { width: "85%" },
      "@media (min-width: 768px)": { width: "80%" },
      "@media (min-width: 1024px)": { width: "76%" },
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "85%",
      "@media (min-width: 640px)": { width: "80%" },
      "@media (min-width: 768px)": { width: "75%" },
      "@media (min-width: 1024px)": { width: "70%" },
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full px-4">
    <SplitTextOnScroll
      text="Top Events"
      textClassName="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-extrabold text-white"
    />
  </div>
</div>

<div>

<div className=" relative h-auto w-50% bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50  min-h-screen ">
      {/* Dotted pattern container */}
      <div className="absolute inset-0">
        {/* Generate a 10x10 grid of dots */}
        {[...Array(300)].map((_, index) => {
          const row = Math.floor(index / 15);
          const col = index % 15;
          return (
            <div
              key={index}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/15"
              style={{
                left: `${(col * 8.5) + 2.5}%`,
                top: `${(row * 7.5) + 2.5}%`,
              }}
            />
          )}
        )}
      </div>
      
      {/* Content container */}
      <div className="relative z-10 p-6">
        {/* Your content goes here */}
        <EventCards/>
      </div>
    </div>

    <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div
    className="grid w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid w-[90%] sm:w-[85%] md:w-[80%] lg:w-[76%]"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%]"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>
</div>

<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-[#1d1441] flex flex-col items-center justify-center z-50">
  <SplitTextOnScroll
    text="Join Innovators and Experience the Power of Our Community"
    textClassName="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4"
  />
  <button className="text-white bg-[#8162ff] rounded-[6px] px-12 sm:px-16 md:px-20 lg:px-24 hover:opacity-80 py-2 sm:py-3 mt-4 sm:mt-5 text-sm sm:text-base">
    Join Now
  </button>
</div>

<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div
    className="grid w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%]"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
  <div
    className="grid w-[90%] sm:w-[85%] md:w-[80%] lg:w-[76%]"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  {/* Row 3 */}
  <div
    className="grid w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-75 aspect-square"
      />
    ))}
  </div>
</div>

    {/* <GridPatternCTA/> */}

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

// {/* <div className="h-[150vh] w-full relative top-0 overflow-hidden mt-0 bg-gradient-to-b from-[#1d1441] via-[#1a1545] to-[#52447ec3] ">
// {/* Grid background */}
// <div
//   className="absolute inset-0 grid"
//   style={{
//     gridTemplateColumns: `repeat(${cols}, 1fr)`,
//     gridTemplateRows: `repeat(${rows}, 1fr)`,
//   }}
// >
//   {gridItems}
// </div>

// {/* Content overlay */}
// <div className="absolute inset-0 z-10 w-[60%] mt-[12%] ml-[20%] mb-10 ">
//   <p className="text-center text-xl sm:text-5xl font-bold text-white mb-6">
//   <SplitTextOnScroll
// text="  Holistic community platform for working professionals"
// textClassName="text-center text-4xl text-white"
// />
  
//   </p>
//   <p className="text-center text-lg sm:text-2xl text-white">
//   <SplitTextOnScroll
// text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// textClassName="text-center text-4xl text-white"
// />
    
//   </p>

//   <button className="text-white bg-[#8162ff] rounded-[6px] px-16 py-3 mt-5 ml-[37%] text-sm">
//     Join Now
//   </button>

//   {/* Cards Section */}
//   <div className="relative flex justify-center mt-12">
//     {/* Left Card */}
//     <div
//       ref={leftCardRef}
//       className="absolute left-0 transform -translate-x-24 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl h-[400px] w-[300px] p-6 pb-6 border border-[#372b59] mt-6"
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white text-lg font-semibold">
//           Hackingly Campus Chapter
//         </h2>
//       </div>
//       <div className="space-y-5 h-[300px] overflow-y-scroll scrollbar-hide">
//         {[
//           "Amity University, Mumbai",
//           "JK Lakshmipat University, Jaipur",
//           "Panipat Institute of Engineering",
//           "Poornima University",
//           "University 5",
//           "University 6",
//           "University 7",
//           "University 8",
//           "University 9",
//           "University 10",
//         ].map((university, index) => (
//           <div key={index} className="flex items-center gap-4">
//             <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
//             <span className="text-white/90 text-sm">{university}</span>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Center Card */}
//     <div
//       ref={centerCardRef}
//       className="z-20 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl  w-[350px] p-6 border border-[#372b59] h-[400px] pb-6 opacity "
//     >
//       <h2 className="text-white text-lg font-semibold mb-6">
//         Campus Leaderboard
//       </h2>
//       <div className="space-y-5 h-[300px] overflow-y-scroll scrollbar-hide">
//         {[
//           {
//             name: "Anshuman Jain",
//             college: "Poornima College of Engineering",
//             trophy: "🏆",
//           },
//           {
//             name: "Gaurav Saxena",
//             college: "Poornima College of Engineering",
//             trophy: "🥈",
//           },
//           {
//             name: "Himanshu Singh",
//             college: "Saint John's University",
//             trophy: "🥉",
//           },
//           { name: "User 4", college: "College 4", trophy: "🎖" },
//           { name: "User 5", college: "College 5", trophy: "🎖" },
//           { name: "User 6", college: "College 6", trophy: "🎖" },
//           { name: "User 7", college: "College 6", trophy: "🎖" },
//           { name: "User 8", college: "College 6", trophy: "🎖" },
//           { name: "User 9", college: "College 6", trophy: "🎖" },
//           { name: "User 10", college: "College 6", trophy: "🎖" },
//         ].map((user, index) => (
//           <div key={index} className="flex items-center gap-4">
//             <span className="text-2xl">{user.trophy}</span>
//             <div className="w-10 h-10 rounded-full bg-[#4c3575] flex-shrink-0" />
//             <div>
//               <p className="text-white text-sm font-medium">{user.name}</p>
//               <p className="text-white/60 text-xs">{user.college}</p>
//             </div>
//           </div>
//         ))}
        
//       </div>
//       <img 
//          src="../../../public/3d-gold-trophy-books-stack-graduation-cap 2.png"
//          alt="Trophy decoration"
//          className="absolute bottom-4 right-4 w-28  h-28 opacity-50"
//        />
//     </div>

//     {/* Right Card */}
//     <div
//       ref={rightCardRef}
//       className="absolute right-0 transform translate-x-24 mt-6 bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl w-[300px] h-[400px] p-6 border border-[#372b59] pb-2 "
//     >
//       <h2 className="text-white text-lg font-semibold mb-6">
//         Startup Community
//       </h2>
//       <div className="space-y-5 h-[300px] overflow-y-scroll scrollbar-hide">
//         {["Startup-1", "Startup-2", "Startup-3", "Startup-4", "Startup-5", "Startup-6","Startup-7", "Startup-8", "Startup-9", "Startup-10",  ].map(
//           (startup, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <div className="w-10 h-10 bg-white/10 rounded-lg flex-shrink-0" />
//               <span className="text-white/90 text-sm">{startup}</span>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}


{/* <div className="relative h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3]  flex flex-col items-center justify-center z-50">
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
        className="bg-transparent border border-[#372b59]  opacity-30  aspect-square"
      />
    ))}
  </div>

  {/* Row 2 */}
//   <div
//     className="grid"
//     style={{
//       gridTemplateColumns: "repeat(16, 1fr)",
//       width: "76%",
//     }}
//   >
//     {Array.from({ length: 16 }, (_, index) => (
//       <div
//         key={index}
//         className="bg-transparent border border-[#372b59]  opacity-30  aspect-square"
//       />
//     ))}
//   </div>

//   {/* Row 3 */}
//   <div
//     className="grid"
//     style={{
//       gridTemplateColumns: "repeat(14, 1fr)",
//       width: "70%",
//     }}
//   >
//     {Array.from({ length: 14 }, (_, index) => (
//       <div
//         key={index}
//         className="bg-transparent border border-[#372b59]  opacity-30  aspect-square"
//       />
//     ))}
//   </div>
// </div>


{/* <div className="relative h-[300px] w-full bg-[#1d1441]  flex flex-col items-center justify-center z-50">


  {/* Text Section */}
  {/* <p className="text-center text-4xl text-white">
    Join Innovators and Experience the Power of Our Community
  </p> */}

  // <SplitTextOnScroll
  //       text="Join Innovators and Experience the Power of Our Community"
  //       textClassName="text-center text-5xl font-bold text-white"
  //     />

  // {/* Button Section */}
  // <button className="text-white bg-[#8162ff] rounded-[6px] px-24 hover:opacity-80 py-3 mt-5 text-sm sm:text-base">
  //   Join Now
  // </button>
// </div>

// <div className="relative h-[300px] w-full bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3]  flex flex-col items-center justify-center z-50">
// <div
//     className="grid "
//     style={{
//       gridTemplateColumns: "repeat(14, 1fr)",
//       width: "70%",
//     }}
//   >
//     {Array.from({ length: 14 }, (_, index) => (
//       <div
//         key={index}
//         className="bg-transparent border border-[#372b59]  opacity-30  aspect-square"
//       />
//     ))}
//   </div>

//   {/* Row 2 */}
//   <div
//     className="grid"
//     style={{
//       gridTemplateColumns: "repeat(16, 1fr)",
//       width: "76%",
//     }}
//   >
//     {Array.from({ length: 16 }, (_, index) => (
//       <div
//         key={index}
//         className="bg-transparent border border-[#372b59]  opacity-30  aspect-square"
//       />
//     ))}
//   </div>

//   {/* Row 3 */}
//   <div
//     className="grid"
//     style={{
//       gridTemplateColumns: "repeat(17, 1fr)",
//       width: "80%",
//     }}
//   >
//     {Array.from({ length: 17 }, (_, index) => (
//       <div
//         key={index}
//         className="bg-transparent border border-[#372b59] opacity-75   aspect-square"
//       />
//     ))}
//   </div>
// </div> */} */}


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