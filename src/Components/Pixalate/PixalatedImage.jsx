import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const PixelateImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const createPixelEffect = () => {
      const existingPixels = image.querySelectorAll('.pixel');
      existingPixels.forEach(pixel => pixel.remove());

      const numPixels = 20;
      const imageWidth = image.offsetWidth;
      const imageHeight = image.offsetHeight;
      const pixelWidth = imageWidth / numPixels;
      const pixelHeight = imageHeight / numPixels;

      for (let y = 0; y < numPixels; y++) {
        for (let x = 0; x < numPixels; x++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.width = `${pixelWidth}px`;
          pixel.style.height = `${pixelHeight}px`;
          pixel.style.position = 'absolute';
          pixel.style.top = `${y * pixelHeight}px`;
          pixel.style.left = `${x * pixelWidth}px`;
          pixel.style.backgroundImage = `url(${image.src})`;
          pixel.style.backgroundPosition = `-${x * pixelWidth}px -${y * pixelHeight}px`;

          image.appendChild(pixel);
        }
      }

      gsap.to(image.querySelectorAll('.pixel'), {
        duration: 0.5,
        opacity: 0.5,
        scale: 1.2,
        stagger: {
          amount: 0.3,
          grid: [numPixels, numPixels]
        }
      });
    };

    image.addEventListener('mouseenter', createPixelEffect);
    image.addEventListener('mouseleave', () => {
      gsap.to(image.querySelectorAll('.pixel'), {
        duration: 0.5,
        opacity: 0,
        scale: 1,
        onComplete: () => {
          const pixels = image.querySelectorAll('.pixel');
          pixels.forEach(pixel => pixel.remove());
        }
      });
    });

    return () => {
      image.removeEventListener('mouseenter', createPixelEffect);
      image.removeEventListener('mouseleave', null); // Clean up both event listeners
    };
  }, []);

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative w-72 h-72">
      <img
        ref={imageRef}
        src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg" // Ensure this path is correct
        alt="Pixelate Effect"
        className="w-full h-full object-cover"
      />
    </div>
    </div>
  );
};


export default PixelateImage