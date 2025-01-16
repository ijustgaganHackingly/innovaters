import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitTextOnScroll = ({ text, textClassName = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <p ref={textRef} className={`overflow-hidden ${textClassName}`}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block word mr-2">
          {word}
        </span>
      ))}
    </p>
  );
};

export default SplitTextOnScroll;
