import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PinAnimation = () => {
  useEffect(() => {
    const animation = gsap.to(".gallery-container", {
      x: "-300%",
      ease: "none",
      scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        pinSpacing: true,
        onLeave: self => {
          // Enable scrolling after pin section
          document.body.style.overflow = '';
        },
        onEnterBack: self => {
          // Re-enable smooth scrolling when entering the section again
          document.body.style.overflow = '';
        }
      }
    });

    return () => {
      // Cleanup on unmount
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = '';
    };
  }, []);

  const galleryItems = [
    {
      title: "DEVELOPER COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    },
    {
      title: "DESIGN COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    },
    {
      title: "STARTUP COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    },
    {
      title: "STUDENT COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    },
    {
      title: "BUSINESS COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    },
    {
      title: "CREATIVE COMMUNITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."
    }
  ];

  return (
    <div className="relative">
      {/* Pin section for scroll animation */}
      <div className="pin-section h-screen">
        <div className="gallery-container flex gap-12 p-12 absolute left-0 top-1/2 -translate-y-1/2">
          {galleryItems.map((item, index) => (
            <div key={index} className="w-[500px] flex-shrink-0">
              <div className="bg-[#2A1B45] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-8">
                    <h2 className="text-blue-400 text-xl font-semibold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinAnimation;