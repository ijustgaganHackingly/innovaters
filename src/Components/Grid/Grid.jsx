import React from "react";

const Grid = () => {
  const cards = [
    {
      title: "HackIoT 1.0",
      subtitle: "36 hours to turn our hardware vision into reality",
      location: "Panipat Institute of Engineering & Technology",
      date: "6-7th Sep'24",
      price: "249/- Only",
      buttonText: "Register Now",
      bgImage: "/path-to-hackiot-image.jpg",
      badge: "LIVE",
    },
    {
      title: "CodeX-24",
      subtitle: "Transforming ideas into solutions in 24 hours",
      location: "Panipat Institute of Engineering & Technology",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "View Event",
      bgImage: "/path-to-codex24-image.jpg",
    },
    {
      title: "Dream Job Decoded",
      subtitle: "Insider secrets to getting hired",
      location: "Online",
      date: "29th Jul - 3rd Aug'24",
      price: "249/- Only",
      buttonText: "Sign Up Today",
      bgImage: "/path-to-dream-job-image.jpg",
    },
    {
      title: "30 Days of DSA",
      subtitle: "Level Up Your DSA Skills",
      location: "Online",
      date: "1st Jul - 31st Jul'24",
      price: "249/- Only",
      buttonText: "Register Now",
      bgImage: "/path-to-dsa-image.jpg",
    },
  ];

  return (
    <div className="relative bg-[#1d1441] py-12">
      {/* Background Dots */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: "repeat(40, 1fr)",
          gridTemplateRows: "repeat(20, 1fr)",
        }}
      >
        {Array.from({ length: 800 }).map((_, i) => (
          <div key={i} className="border border-[#372b59] h-1 w-1"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl font-bold mb-8">
          Top Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1a1528] rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              {/* Card Image */}
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              >
                {card.badge && (
                  <span className="bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-bl-xl">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/70">{card.subtitle}</p>
                <p className="text-xs text-white/50 mt-2">
                  {card.location} <br />
                  {card.date} <br />
                  {card.price}
                </p>
                <button className="mt-4 bg-[#4c3575] text-white text-sm px-4 py-2 rounded-full">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
