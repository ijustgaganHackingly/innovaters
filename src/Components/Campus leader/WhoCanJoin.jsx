import React from 'react';

const WhoCanJoin = () => {
  const categories = [
    {
      title: "College Students",
      id: "professionals",
      description: "Established professionals looking to expand their network"
    },
    {
      title: "Innovative Thinkers",
      id: "students",
      description: "Learners seeking mentorship and career opportunities"
    },
    {
      title: "Sales and Marketing Enthusiasts",
      id: "founders",
      description: "Entrepreneurs building the next big innovation"
    },
    {
      title: "Good Communicators",
      id: "communicators",
      description: "Those who excel at connecting and sharing ideas"
    },
  ];

  // Using placeholder images with different dimensions for each category
  const getPlaceholderUrl = (id) => {
    switch (id) {
      case "professionals":
        return "/College students.jpg";
      case "students":
        return "/innovative thinkers.jpg";
      case "founders":
        return "/sales & marketing enthusiasts.jpg";
      case "communicators":
        return "/Good communicators.jpg";
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-[500] text-center text-gray-700 mb-10 mt-10">
          Who can Join Us?
        </h2>
      </div>
      <div className='w-full flex justify-center '>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative w-full h-64 overflow-hidden group"
              style={{ isolation: "isolate" }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src={getPlaceholderUrl(category.id)}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center z-10">
                <button className="px-3 py-2 bg-white/30 backdrop-blur-md rounded-full mb-2 hover:bg-white/40 transition-colors duration-300">
                  <span className="text-white font-medium text-base whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
     
    </>
  );
};

export default WhoCanJoin;

// import React from 'react';

// const WhoCanJoin = () => {
//   const categories = [
//     { title: "Working Professionals", id: "professionals" },
//     { title: "Students", id: "students" },
//     { title: "Startup Founders", id: "founders" },
//     { title: "Good Communicators", id: "communicators" },
//   ];

//   return (
//     <><div className="w-full max-w-6xl mx-auto px-4 py-12">
//     <h2 className="text-4xl font-bold text-center  text-gray-700 mb-20">Who can Join Us?</h2>
    
  
//   </div>
//   <div className='flex justify-center'>
//   <div className="grid grid-cols-1 w-[85%]  sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {categories.map((category) => (
//         <div 
//           key={category.id}
//           className="relative w-full h-64 overflow-hidden rounded-3xl"
//         >
//           <img
//             src="/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg"
//             alt={category.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//           <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/30 backdrop-blur-md rounded-full">
//             <span className="text-white font-medium text-base whitespace-nowrap">
//               {category.title}
//             </span>
//           </button>
//         </div>
//       ))}
//     </div>
//   </div></>
//   );
// };

// export default WhoCanJoin;