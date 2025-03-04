import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Django_url } from '../../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons


const EventCards = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null); // Ref for Swiper instance

  useEffect(() => {
    const listOpportunitiesAPICall = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${Django_url}/opportunity/list/`, {
          params: {
            page: 1,
            page_size: 20,
            ordering: '-created_at',
            is_verified: true,
            is_active: true,
          },
        });

        console.log('Events Page API Response:', response.data);

        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setEvents(response.data.data);
        } else if (response.data && response.data.results && Array.isArray(response.data.results)) {
          setEvents(response.data.results);
        } else if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          console.error('API response does not contain an array of events:', response.data);
          setEvents([]);
        }
      } catch (err) {
        console.error('Error fetching opportunities:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    listOpportunitiesAPICall();
  }, []);

  const safeRenderText = (value, fallback = "N/A") => {
    if (value === null || value === undefined) {
      return fallback;
    }

    if (typeof value === 'object') {
      return value.name || value.title || value.label || value.value || JSON.stringify(value);
    }

    return String(value);
  };

  const getLocationText = (event) => {
    if (event.mode === 'Online') {
      return 'Online';
    } else if (event.location) {
      return event.location;
    } else {
      return 'N/A';
    }
  };


  if (isLoading) {
    return <div>Loading Events...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleRedirect = () => {
    window.location.href = 'https://www.hackingly.in/event';
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-center justify-center w-full">


        {/* Container for Swiper with Padding and Buttons */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex Container for Arrows and Swiper */}
          <div className="flex items-center gap-4 w-full">
            {/* Left Arrow */}
            <button
              className="text-[#8162ff] p-2 rounded-full hover:bg-[#6b4ff0] hover:text-white transition-colors"
              onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
            >
              <FaArrowLeft className="w-5 h-5" /> {/* Left arrow icon */}
            </button>

            {/* Swiper Integration */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10} // Space between cards
              slidesPerView={1} // Default for mobile
              navigation={false} // Disable default navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2, // 2 cards on tablets
                },
                768: {
                  slidesPerView: 3, // 3 cards on small desktops
                },
                1024: {
                  slidesPerView: 4, // 4 cards on larger screens
                },
              }}
              className="w-full flex-1 " // Swiper takes remaining space
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
            >
              {events.length > 0 ? (
                events.map((event, index) => (
                  <SwiperSlide className='py-4' key={event.id || index}>
                    <div className="bg-transparent rounded-[6px] overflow-hidden border border-[#4f3975] flex flex-col h-full ">
                      <div className="relative w-full">
                        <img
                          className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] object-cover"
                          src={event.opportunity_main_picture || "/api/placeholder/400/300"}
                          alt={safeRenderText(event.title || event.name, "Event image")}
                        />
                      </div>

                      <div className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 flex flex-col flex-grow">
                        <h5 className="min-h-[8vh] sm:min-h-[9vh] md:min-h-[10vh] text-sm sm:text-base font-bold tracking-tight text-white mb-2">
                          {safeRenderText(event.title || event.name, "Untitled Event")}
                        </h5>

                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <img
                            src="/api/placeholder/20/20"
                            alt="location"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                          <p className="text-xs sm:text-sm text-gray-400 min-h-[5vh] sm:min-h-[6vh] md:min-h-[7vh] line-clamp-2">
                            {getLocationText(event)}
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 min-h-[4vh] sm:min-h-[5vh] md:min-h-[6vh] mt-auto">
                          <div className="flex items-center gap-2">
                            <img
                              src="/api/placeholder/20/20"
                              alt="calendar"
                              className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                            {safeRenderText(event.date || event.end_date, "Date TBD")}
                          </div>
                          <div className="flex items-center gap-2">
                            <img
                              src="/api/placeholder/20/20"
                              alt="wallet"
                              className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                            <p>{safeRenderText(event.fees, "Free")}</p>
                          </div>
                        </div>

                        <button
                          onClick={handleRedirect}
                          className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-3 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm transition-colors duration-200"
                        >
                          View Event
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-white">
                  No events found
                </div>
              )}
            </Swiper>

            {/* Right Arrow */}
            <button
              className="text-[#8162ff] p-2 rounded-full hover:bg-[#6b4ff0] hover:text-white transition-colors"
              onClick={() => swiperRef.current?.slideNext()} // Go to next slide
            >
              <FaArrowRight className="w-5 h-5" /> {/* Right arrow icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCards;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Django_url } from '../../../constants';
// import { useNavigate } from 'react-router-dom';
// // import { Navigate } from 'react-router-dom';

// const EventCards = () => {
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // const navigate = useNavigate();

//   useEffect(() => {
//     const listOpportunitiesAPICall = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`${Django_url}/opportunity/list/`, {
//           params: {
//             page: 1,
//             page_size: 20,
//             ordering: '-created_at',
//             is_verified: true,
//             is_active: true,
//           },
//         });
//         console.log('response', response);
//         console.log('Events Page API Response:', response.data);

//         if (response.data && response.data.data && Array.isArray(response.data.data)) {
//           setEvents(response.data.data);
//         } 
//         else if (response.data && response.data.results && Array.isArray(response.data.results)) {
//           setEvents(response.data.results);
//         } 
//         else if (Array.isArray(response.data)) {
//           setEvents(response.data);
//         } 
//         else {
//           console.error('API response does not contain an array of events:', response.data);
//           setEvents([]);
//         }
//       } catch (err) {
//         console.error('Error fetching opportunities:', err);
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     listOpportunitiesAPICall();
//   }, []);

//   // const handleRedirect = () => {
//   //   navigate('https://www.hackingly.in/event')
//   // };

//   const handleRedirect = () => {
//     window.location.href = 'https://www.hackingly.in/event'; 
//   };

//   const safeRenderText = (value, fallback = "N/A") => {
//     if (value === null || value === undefined) {
//       return fallback;
//     }
    
//     if (typeof value === 'object') {
//       return value.name || value.title || value.label || value.value || JSON.stringify(value);
//     }
    
//     return String(value);
//   };

//   if (isLoading) {
//     return <div>Loading Events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[82%]">
//         {events.length > 0 ? (
//           events.map((event, index) => (
//             <div key={event.id || index} className="bg-transparent rounded-[6px] overflow-hidden border border-[#4f3975] flex flex-col">
//               <div className="relative w-full">
//                 <img
//                   className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] object-cover"
//                   src={event.opportunity_main_picture || "/api/placeholder/400/300"}
//                   alt={safeRenderText(event.title || event.name, "Event image")}
//                 />
//               </div>

//               <div className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 flex flex-col flex-grow">
//                 <h5 className="min-h-[8vh] sm:min-h-[9vh] md:min-h-[10vh] text-sm sm:text-base font-bold tracking-tight text-white mb-2">
//                   {safeRenderText(event.title || event.name, "Untitled Event")}
//                 </h5>

//                 <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                   <img
//                     src="/api/placeholder/20/20"
//                     alt="location"
//                     className="w-4 h-4 sm:w-5 sm:h-5"
//                   />
//                   <p className="text-xs sm:text-sm text-gray-400 min-h-[5vh] sm:min-h-[6vh] md:min-h-[7vh] line-clamp-2">
//                     {safeRenderText(event.mode || event.location, "N/A")}
//                   </p>
//                 </div>

//                 <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 min-h-[4vh] sm:min-h-[5vh] md:min-h-[6vh] mt-auto">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src="/api/placeholder/20/20"
//                       alt="calendar"
//                       className="w-4 h-4 sm:w-5 sm:h-5"
//                     />
//                     {safeRenderText(event.date || event.end_date, "Date TBD")}
//                   </div>
//                   <p>{safeRenderText(event.fees, "Free")}</p>
//                 </div>

//                 <button onClick={handleRedirect} className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-3 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm transition-colors duration-200">
//                   {/* {safeRenderText(event.buttonText, "View Details")} */}
//                   View Event
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-white">
//             No events found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventCards;

// import React from 'react';

// const EventCards = () => {
//   const events = [
//     {
//       imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
//       title: "36 hours to turn vkpsekgv[kmg[e",
//       institution: "Panipat Institute jgbjesjgnseg",
//       date: "10-11th May'24",
//       price: "249/- Only",
//       buttonText: "Register Now"
//     },
//     {
//       imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
//       title: "CodeX 24- pfksajgjfw ",
//       institution: "Panipat Institute vmsp[jgw[sjvws]] ",
//       date: "10-11th May'24",
//       price: "249/- Only",
//       buttonText: "View Event"
//     },
//     {
//       imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
//       title: "Dream Job gvms[dkvs[]] ",
//       institution: "Panipat Institut vjkpsgjsjgwa",
//       date: "29th Jul-3rd Aug'24",
//       price: "249/- Only",
//       buttonText: "View Event"
//     },
//     {
//       imageUrl: "../../../public/daniil-silantev-sN4u56baSB0-unsplash - Copy - Copy.jpg",
//       title: "30 DAYS OF DSA kvs[kv[skvs[kvs[vks]]]] kgjgjghjdkskshjdeidkjkjfhgkdkll",
//       institution: "Panipat Institute jdssjv'spj'psazvja'pgjafj nldbnodnbodbnodnbodsnb",
//       date: "10-11th May'24",
//       price: "249/- Only",
//       buttonText: "View Event"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[82%]">
//         {events.map((event, index) => (
//           <div key={index} className="bg-transparent rounded-[6px] overflow-hidden border border-[#4f3975] flex flex-col">
//             <div className="relative w-full">
//               <img
//                 className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] object-cover"
//                 src={event.imageUrl}
//                 alt={event.title}
//               />
//             </div>
            
//             <div className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 flex flex-col flex-grow">
//               <h5 className="min-h-[8vh] sm:min-h-[9vh] md:min-h-[10vh] text-sm sm:text-base font-bold tracking-tight text-white mb-2">
//                 {event.title}
//               </h5>
              
//               <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                 <img
//                   src="/api/placeholder/20/20"
//                   alt="location"
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <p className="text-xs sm:text-sm text-gray-400 min-h-[5vh] sm:min-h-[6vh] md:min-h-[7vh] line-clamp-2">
//                   {event.institution}
//                 </p>
//               </div>
              
//               <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 min-h-[4vh] sm:min-h-[5vh] md:min-h-[6vh] mt-auto">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src="/api/placeholder/20/20"
//                     alt="calendar"
//                     className="w-4 h-4 sm:w-5 sm:h-5"
//                   />
//                   {event.date}
//                 </div>
//                 <p>{event.price}</p>
//               </div>
              
//               <button className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-3 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm transition-colors duration-200">
//                 {event.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCards;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Django_url } from '../../../constants';

// const EventCards = () => {
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const listOpportunitiesAPICall = async () => {
//       try {
//         setIsLoading(true);

//         if (!Django_url) {
//           setError(new Error("Django API URL is not defined. Check your .env file."));
//           return; // Stop the API call if the URL is missing
//         }

//         console.log("Django API URL:", Django_url); // Debugging URL

//         const response = await axios.get(`${Django_url}/opportunity/list/`, {
//           params: {
//             page: 1,
//             page_size: 20,
//             ordering: '-created_at',
//             is_verified: true,
//             is_active: true,
//           },
//         });

//         console.log('Events Page API Response:', response.data);

//         if (Array.isArray(response.data.data)) {
//            setEvents(response.data.data); // Correctly access the 'data' array
//         } else {
//            setError(new Error("API returned invalid data format. Expected an array."));
//            setEvents([]); // Ensure events is always initialized as an array.
//         }


//       } catch (err) {
//         console.error('Error fetching opportunities:', err);
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     listOpportunitiesAPICall();
//   }, []);

//   if (isLoading) {
//     return <div>Loading Events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[82%]">
//         {events.map((event, index) => (  // events *must* be an array here
//           <div key={index} className="bg-transparent rounded-[6px] overflow-hidden border border-[#4f3975] flex flex-col">
//             <div className="relative w-full">
//               <img
//                 className="w-full h-[30vh] sm:h-[35vh] md:h-[38vh] lg:h-[40vh] object-cover"
//                 src={event.image_url}  
//                 alt={event.title}       
//               />
//             </div>

//             <div className="px-2 sm:px-3 md:px-4 py-3 sm:py-4 flex flex-col flex-grow">
//               <h5 className="min-h-[8vh] sm:min-h-[9vh] md:min-h-[10vh] text-sm sm:text-base font-bold tracking-tight text-white mb-2">
//                 {event.title}  
//               </h5>

//               <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                 <img
//                   src="/api/placeholder/20/20"
//                   alt="location"
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <p className="text-xs sm:text-sm text-gray-400 min-h-[5vh] sm:min-h-[6vh] md:min-h-[7vh] line-clamp-2">
//                   {event.institution} 
//                 </p>
//               </div>

//               <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 min-h-[4vh] sm:min-h-[5vh] md:min-h-[6vh] mt-auto">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src="/api/placeholder/20/20"
//                     alt="calendar"
//                     className="w-4 h-4 sm:w-5 sm:h-5"
//                   />
//                   {event.event_date}  
//                 </div>
//                 <p>{event.price}</p>  
//               </div>

//               <button className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-3 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm transition-colors duration-200">
//                 Register Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCards;