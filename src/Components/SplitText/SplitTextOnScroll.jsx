import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitTextOnScroll = ({ text, textClassName }) => {
  const textRef = useRef(null);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // 768px is Tailwind's md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Only set up animation if screen is md or larger
    if (isMediumScreen) {
      const words = textRef.current.querySelectorAll(".word");

      // Ensure text is visible by default
      gsap.set(words, { opacity: 1, y: 0 });

      const animation = gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 97%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener('resize', checkScreenSize);
      };
    }

    // Cleanup resize listener if animation isn't running
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMediumScreen]); // Re-run effect when screen size changes

  return (
    <p ref={textRef} className={`overflow-hidden ${textClassName}`}>
      {text.split(" ").map((word, index) => (
        <span 
          key={index} 
          className={`inline-block word mr-2 ${!isMediumScreen ? 'opacity-100' : ''}`}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default SplitTextOnScroll;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SplitTextOnScroll = ({ text, textClassName }) => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const words = textRef.current.querySelectorAll(".word");

//     // Ensure text is visible by default
//     gsap.set(words, { opacity: 1, y: 0 });

//     const animation = gsap.fromTo(
//       words,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1,
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 98%",
//           end: "top 50%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     return () => {
//       animation.kill(); // Clean up animation
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up scroll triggers
//     };
//   }, []);

//   return (
//     <p ref={textRef} className={`overflow-hidden ${textClassName}`}>
//       {text.split(" ").map((word, index) => (
//         <span key={index} className="inline-block word mr-2">
//           {word}
//         </span>
//       ))}
//     </p>
//   );
// };

// export default SplitTextOnScroll;
