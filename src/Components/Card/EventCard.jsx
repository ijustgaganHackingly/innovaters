import React from 'react';

const EventCards = () => {
  const events = [
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "36 hours to turn vkpsekgv[kmg[e",
      institution: "Panipat Institute jgbjesjgnseg",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "Register Now"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "CodeX 24- pfksajgjfw ",
      institution: "Panipat Institute vmsp[jgw[sjvws]] ",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "View Event"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "Dream Job gvms[dkvs[]] ",
      institution: "Panipat Institut vjkpsgjsjgwa",
      date: "29th Jul-3rd Aug'24",
      price: "249/- Only",
      buttonText: "View Event"
    },
    {
      imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
      title: "30 DAYS OF DSA kvs[kv[skvs[kvs[vks]]]] kgjgjghjdkskshjdeidkjkjfhgkdkll",
      institution: "Panipat Institute jdssjv'spj'psazvja'pgjafj nldbnodnbodbnodnbodsnb",
      date: "10-11th May'24",
      price: "249/- Only",
      buttonText: "View Event"
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[82%]">
        {events.map((event, index) => (
          <div key={index} className="bg-transparent rounded-[6px] overflow-hidden border border-[#4f3975] flex flex-col">
            <div className="relative w-full">
              <img
                className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] object-cover"
                src={event.imageUrl}
                alt={event.title}
              />
            </div>
            
            <div className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 flex flex-col flex-grow">
              <h5 className="min-h-[8vh] sm:min-h-[9vh] md:min-h-[10vh] text-sm sm:text-base font-bold tracking-tight text-white mb-2">
                {event.title}
              </h5>
              
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <img
                  src="/api/placeholder/20/20"
                  alt="location"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <p className="text-xs sm:text-sm text-gray-400 min-h-[5vh] sm:min-h-[6vh] md:min-h-[7vh] line-clamp-2">
                  {event.institution}
                </p>
              </div>
              
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 min-h-[4vh] sm:min-h-[5vh] md:min-h-[6vh] mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src="/api/placeholder/20/20"
                    alt="calendar"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  {event.date}
                </div>
                <p>{event.price}</p>
              </div>
              
              <button className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-3 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm transition-colors duration-200">
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