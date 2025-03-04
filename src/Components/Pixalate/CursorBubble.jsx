import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorBubble = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    if (!bubbleRef.current) return;

    gsap.set(bubbleRef.current, {
      width: 80,
      height: 80,
      borderRadius: '50%',
      backgroundColor: '#372b59',
      position: 'fixed',
      top: -40,
      left: -40,
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.8,
    });

    bubbleRef.current.style.background = `
      radial-gradient(circle at center,
        rgba(152, 255, 0, 0.8) 100%,
        rgba(152, 255, 0, 0.9) 30%,
        rgba(152, 255, 0, 0) 100%)
    `;

    const followMouse = (e) => {
      gsap.to(bubbleRef.current, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
    };

    const addGlowEffect = (e) => {
      const bubble = bubbleRef.current;
      const rect = bubble.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      
      gsap.to(bubble, {
        duration: 0.3,
        scale: 1 + (Math.abs(distX) + Math.abs(distY)) * 0.0003,
        ease: "power1.out"
      });
    };

    window.addEventListener('mousemove', followMouse);
    window.addEventListener('mousemove', addGlowEffect);

    
    return () => {
      window.removeEventListener('mousemove', followMouse);
      window.removeEventListener('mousemove', addGlowEffect);
    };
  }, []);

  return (
    <div 
      ref={bubbleRef}
      className="cursor-bubble"
      style={{
        mixBlendMode: 'screen',
        filter: 'blur(5px)'
      }}
    />
  );
};

export default CursorBubble;