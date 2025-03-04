import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollGallery = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    // Create timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${cards.length * 100}%`, // Adjust scroll length based on number of cards
        pin: true,
        scrub: 2, // Increased for smoother animation
        anticipatePin: 1,
        markers: true // Helpful for debugging
      }
    });

    // Set initial positions
    gsap.set(cards, { x: "200%" }); // Start further right

    // Animate each card sequentially
    cards.forEach((card, index) => {
      // Move current card from right to left
      tl.to(card, {
        x: "0%",
        duration: 1,
        ease: "power1.inOut"
      })
      // Keep it centered for a moment
      .to(card, {
        x: "0%",
        duration: 0.5,
      })
      // Move it out to the left
      .to(card, {
        x: "-200%",
        duration: 1,
        ease: "power1.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const images = [
    { id: 1, url: "/api/placeholder/800/600", title: "Nature Escape" },
    { id: 2, url: "/api/placeholder/800/600", title: "Urban Adventure" },
    { id: 3, url: "/api/placeholder/800/600", title: "Mountain Peak" },
    { id: 4, url: "/api/placeholder/800/600", title: "Ocean Waves" },
    { id: 5, url: "/api/placeholder/800/600", title: "Desert Sunset" }
  ];

  return (
    <div className="w-screen min-h-screen overflow-hidden">
      {/* Gallery Section */}
      <div ref={containerRef} className="relative h-screen bg-gradient-to-r from-gray-900 to-gray-800">
        {images.map((image, index) => (
          <div
            key={image.id}
            ref={el => cardsRef.current[index] = el}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-3xl transition-shadow duration-500"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[50vh] object-cover"
              />
              <div className="p-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{image.title}</h2>
                <p className="text-lg text-gray-600">
                  Discover the story behind {image.title.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Section */}
      <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
        <h2 className="text-6xl font-bold text-white">Welcome to the Next Section</h2>
      </div>
    </div>
  );
};

export default ScrollGallery;