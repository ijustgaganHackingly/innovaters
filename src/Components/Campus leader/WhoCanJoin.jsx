import React from 'react';

const WhoCanJoin = () => {
  const categories = [
    { title: "Working Professionals", id: "professionals" },
    { title: "Students", id: "students" },
    { title: "Startup Founders", id: "founders" },
    { title: "Good Communicators", id: "communicators" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center  text-gray-700 mb-20">Who can Join Us?</h2>
      
    <div className='flex justify-center'>
    <div className="grid grid-cols-1 w-[92%]  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="relative w-full h-64 overflow-hidden rounded-3xl"
          >
            <img
              src="../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/30 backdrop-blur-md rounded-full">
              <span className="text-white font-medium text-base whitespace-nowrap">
                {category.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhoCanJoin;