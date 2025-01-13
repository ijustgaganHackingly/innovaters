import React from 'react';

const EventCards = () => {
  const events = [
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "36 hours to turn our hardware vision into reality",
      institution: "Panipat Institute of Engineering & Technology",
      date: "6-7th Sep'24",
      price: "249/- Only",
      buttonText: "Register Now"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "CodeX 24- transforming ideas into solution in 24 hours",
      institution: "Panipat Institute of Engineering & Technology",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "View Event"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "Dream Job Decoded- insider secrets to get hired",
      institution: "Online",
      date: "29th Jul-3rd Aug'24",
      price: "249/- Only",
      buttonText: "View Event"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "30 DAYS OF DSA",
      institution: "Panipat Institute of Engineering & Technology",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "View Event"
    }
  ];

  return (
    <div className=" relative h-auto w-100%  flex flex-col items-center justify-center z-50 mt-0 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[82%]">
        {events.map((event, index) => (
          <div key={index} className="bg-transparent rounded-lg overflow-hidden border border-[#4f3975]">
            <div>
              <img 
                className="w-full h-48 object-cover"
                src={event.imageUrl}
                alt={event.title}
              />
            </div>
            
            <div className="p-5">
              <h5 className="mb-2 text-sm font-bold tracking-tight text-white">
                {event.title}
              </h5>
              
              <div className="flex items-center gap-2 mb-3">
                <img 
                  src="/api/placeholder/20/20"
                  alt="location"
                  className="w-5 h-5"
                />
                <p className="text-sm text-gray-400">
                  {event.institution}
                </p>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <img 
                    src="/api/placeholder/20/20"
                    alt="calendar"
                    className="w-5 h-5"
                  />
                  {event.date}
                </div>
                <p>{event.price}</p>
              </div>
              
              <button className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-lg px-4 py-3 mt-5 text-sm transition-colors duration-200">
                {event.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;