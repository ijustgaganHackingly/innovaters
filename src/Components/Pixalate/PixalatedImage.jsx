import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PixelatedImage = () => {
  const containerRef = useRef(null);
  const GRID_SIZE = 8; // Number of segments in each direction

  useEffect(() => {
    const container = containerRef.current;
    const cells = [];

    // Create grid cells
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const cell = document.createElement('div');
      const x = (i % GRID_SIZE) * (100 / GRID_SIZE);
      const y = Math.floor(i / GRID_SIZE) * (100 / GRID_SIZE);
      
      cell.style.cssText = `
        position: absolute;
        width: ${100 / GRID_SIZE}%;
        height: ${100 / GRID_SIZE}%;
        left: ${x}%;
        top: ${y}%;
        background-image: url('../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg');
        background-size: ${GRID_SIZE * 100}% ${GRID_SIZE * 100}%;
        background-position: ${-x}% ${-y}%;
        transform: scale(1);
        opacity: 1;
        transition: all 0.2s ease-out;
      `;
      
      cells.push(cell);
      container.appendChild(cell);
    }

    // Animation setup
    const handleMouseEnter = () => {
      gsap.to(cells, {
        duration: 0.5,
        stagger: {
          amount: 0.3,
          grid: [GRID_SIZE, GRID_SIZE],
          from: "center"
        },
        z: "random(-100, 100)",
        rotationX: "random(-60, 60)",
        rotationY: "random(-60, 60)",
        opacity: 0.6,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cells, {
        duration: 0.5,
        stagger: {
          amount: 0.2,
          grid: [GRID_SIZE, GRID_SIZE],
          from: "center"
        },
        z: 0,
        rotationX: 0,
        rotationY: 0,
        opacity: 1,
        ease: "power2.inOut"
      });
    };

    // Event listeners
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cells.forEach(cell => cell.remove());
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div 
        ref={containerRef} 
        className="relative w-full aspect-video bg-black overflow-hidden rounded-lg"
      >
      <img src='../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg'/>
      </div>
    </div>
  );
};

export default PixelatedImage;