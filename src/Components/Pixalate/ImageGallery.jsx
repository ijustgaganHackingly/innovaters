// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import "tailwindcss/tailwind.css";

// gsap.registerPlugin(ScrollTrigger);

// const ImageGallery = () => {
//   const scrollRef = useRef(null);
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const cards = galleryRef.current.querySelectorAll(".image-card");

//     // GSAP Animation for horizontal scroll effect
//     gsap.to(cards, {
//       xPercent: -100 * (cards.length - 1), // Move cards horizontally
//       ease: "none",
//       scrollTrigger: {
//         trigger: scrollRef.current,
//         start: "top top", // Trigger when the top of the scroll container hits the top of the viewport
//         end: () => `+=${cards.length * window.innerWidth}`, // Scrollable width based on card count
//         scrub: true,
//         pin: true, // Pins the gallery while scrolling
//       },
//     });

//   }, []);

//   return (
//     <div
//       ref={scrollRef}
//       className="relative bg-black h-screen overflow-hidden"
//     >
//       {/* Scrollable Content */}
//       <div className="scroll-container">
//         {/* Horizontal Gallery */}
//         <div
//           ref={galleryRef}
//           className="flex space-x-10 h-screen items-center"
//         >
//           {/* Example Image Cards with Details */}
//           {[1, 2, 3, 4, 5].map((image, index) => (
//             <div
//               key={index}
//               className="image-card w-[400px] h-[300px] bg-gray-700 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white text-xl p-6"
//             >
//               <div className="card-image w-full h-[150px] bg-gray-500 rounded-md mb-4">
//                 {/* Replace with actual image */}
//                 <img
//                   src={`/image-${index + 1}.jpg`} // Assuming images are stored like image-1.jpg, image-2.jpg, etc.
//                   alt={`Image ${index + 1}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//               <div className="card-details text-center">
//                 <h2 className="text-2xl font-semibold">Card Title {index + 1}</h2>
//                 <p className="mt-2 text-sm">Description for card {index + 1}. This is where you can add more details about the image or topic.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const ImageGallery = () => {
//   const scrollRef = useRef(null);
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });

//     const cards = galleryRef.current.querySelectorAll(".image-card");

//     // GSAP Animation
//     gsap.to(cards, {
//       xPercent: -100 * (cards.length - 1), // Move cards horizontally
//       ease: "none",
//       scrollTrigger: {
//         trigger: galleryRef.current,
//         start: "top top",
//         end: () => `+=${cards.length * window.innerWidth}`, // Adjust to the total width
//         scrub: true,
//         pin: true,
//       },
//     });

//     return () => {
//       locoScroll.destroy();
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} className="relative bg-black h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/background.jpg")' }}></div>
      
//       {/* Scrollable Content */}
//       <div className="scroll-container">
//         {/* Horizontal Gallery */}
//         <div
//           ref={galleryRef}
//           className="flex space-x-10 h-screen items-center"
//         >
//           {/* Example Image Cards */}
//           {[1, 2, 3, 4, 5].map((image, index) => (
//             <div
//               key={index}
//               className="image-card w-[400px] h-[300px] bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center text-white text-xl"
//             >
//               Image {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const SwordAnimation = () => {
//   const containerRef = useRef(null);
//   const swordHandRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const swordHand = swordHandRef.current;

//     const handleMouseMove = (e) => {
//       if (!container || !swordHand) return;

//       const bounds = container.getBoundingClientRect();
//       const centerX = bounds.left + bounds.width / 2;
//       const centerY = bounds.top + bounds.height / 2;

//       const distX = (e.clientX - centerX) / (bounds.width / 2);
//       const distY = (e.clientY - centerY) / (bounds.height / 2);

//       // Reduced rotation for subtler effect
//       const maxRotation = 3;
      
//       // Calculate rotation based on mouse position
//       const rotateX = -maxRotation * distY;
//       const rotateY = maxRotation * distX;

//       // Animate the sword hand with more natural movement
//       animationRef.current = gsap.to(swordHand, {
//         duration: 0.8,
//         rotateX: rotateX,
//         rotateY: rotateY,
//         x: distX * 5, // Subtle horizontal movement
//         y: distY * 5, // Subtle vertical movement
//         transformOrigin: "center center",
//         ease: "power1.out"
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationRef.current) {
//         animationRef.current.kill();
//       }
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#FF6B00]">
//       <div 
//         ref={containerRef}
//         className="relative w-full max-w-[1200px] h-[600px] overflow-hidden"
//       >
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-center bg-no-repeat bg-contain"
//           style={{
//             backgroundImage: "url('https://a.storyblok.com/f/298921/2560x1108/8e83ae5df8/nl_1.png')"
//           }}
//         />
        
//         {/* Animated Hand */}
//         <div 
//           ref={swordHandRef}
//           className="absolute w-[300px] h-[300px] bg-center bg-no-repeat bg-contain"
//           style={{
//             backgroundImage: "url('https://a.storyblok.com/f/298921/2560x1108/8e83ae5df8/nl_1.png')",
//             backgroundPosition: "25% 50%",
//             left: '35%',
//             top: '30%',
//             filter: 'brightness(0.9)',
//             transform: 'perspective(1000px)'
//           }}
//         />

//         {/* Logo Text Overlay */}
//         <div className="absolute bottom-[20%] left-0 w-full text-center text-white">
//           <h1 className="text-4xl font-bold mb-2">TOGETHER WE FIGHT. SOME OF US WILL DIE.</h1>
//           <button className="bg-black text-white px-6 py-2 mt-4">
//             BOOKMARK NOW ON KICKSTARTER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SwordAnimation;