import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const BubbleButton = () => {
  const buttonRef = useRef(null);
  const bubblesRef = useRef([]);
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const createBubbles = () => {
    const bubbles = [];
    const cols = 10;
    const rows = 5;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        bubbles.push({
          id: i * rows + j,
          size: Math.random() * 10 + 5,
          initialX: (i * 120) / cols,
          initialY: (j * 40) / rows,
          xOffset: Math.random() * 100 + 150 * (i / cols),
          yOffset: Math.random() * 40 - 20,
        });
      }
    }
    return bubbles;
  };

  const animateBubbles = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Hide the button
    gsap.to(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setIsButtonVisible(false);
      }
    });

    // Animate each bubble
    bubblesRef.current.forEach((bubble, index) => {
      const col = Math.floor(index / 5);
      
      gsap.fromTo(bubble,
        {
          opacity: 0,
          scale: 0,
          x: bubble.dataset.initialX - 60,
          y: bubble.dataset.initialY - 20,
        },
        {
          opacity: 1,
          scale: 1,
          x: `+=${bubble.dataset.xOffset}`,
          y: `+=${bubble.dataset.yOffset}`,
          delay: col * 0.02,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(bubble, {
              opacity: 0,
              scale: 0.5,
              duration: 0.3,
              onComplete: () => {
                if (index === bubblesRef.current.length - 1) {
                  isAnimatingRef.current = false;
                }
              }
            });
          }
        }
      );
    });
  };

  useEffect(() => {
    const bubbleElements = bubblesRef.current;
    return () => {
      bubbleElements.forEach(bubble => {
        gsap.killTweensOf(bubble);
      });
    };
  }, []);

  const bubbles = createBubbles();

  return (
    <div ref={containerRef} className="relative w-32 h-12">
      {isButtonVisible && (
        <button
          ref={buttonRef}
          className="w-full h-full text-center bg-lime-300 text-black rounded-md  p-8 font-medium shadow-lg"
          onClick={animateBubbles}
        >
          <p className='text-center'>Click me</p>
        </button>
      )}
      
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.id}
          ref={el => bubblesRef.current[index] = el}
          className="absolute rounded-full  bg-lime-300  opacity-0"
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
          data-initial-x={bubble.initialX}
          data-initial-y={bubble.initialY}
          data-x-offset={bubble.xOffset}
          data-y-offset={bubble.yOffset}
        />
      ))}
    </div>
  );
};

export default BubbleButton;