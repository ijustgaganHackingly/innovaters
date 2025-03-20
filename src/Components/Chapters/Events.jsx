import  { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Django_url } from '../../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);
  const [isresponsive, setIsResponsive] = useState('vertical');

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

        // console.log('Events Page API Response:', response.data);

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

  useEffect(() => {
    const handleResize = () => {
      const newOrientation = window.innerWidth >= 768 ? 'horizontal' : 'vertical';
      setIsResponsive(newOrientation);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const handleRedirect = (event) => {
    const opportunityRef = event?.alias || event?.id;
    window.location.href = `https://www.hackingly.in/events/${opportunityRef}`;
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-50 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="p-[9px] font-[500] text-3xl">Community Events</h1>
        <h3 className="text-base">Unite, Inspire & grow with us.</h3>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      
           <div className="flex items-center gap-4 w-full">
                      <button
                        className="text-[#8162ff] p-2 rounded-full hover:bg-[#6b4ff0] hover:text-white transition-colors"
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <FaArrowLeft className="w-5 h-5" />
                      </button>
          
                      <Swiper
                        modules={[Navigation,Pagination,Scrollbar, A11y]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={false}
                        pagination={{ clickable: true }}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          1024: {
                            slidesPerView: 4,
                          },
                        }}
                        className="w-full flex-1"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                      >
                        {events.length > 0 ? (
                          events.map((event, index) => (
                            <SwiperSlide className="py-10" key={event.id || index}>
                              <div className="bg-white rounded-[8px] overflow-hidden border border-gray-400 flex flex-col h-[450px]">
                                <div className="relative w-full h-[280px]">
                                  <img
                                    className="w-full h-full object-cover"
                                    src={event.opportunity_main_picture || "/api/placeholder/400/300"}
                                    alt={safeRenderText(event.title || event.name, "Event image")}
                                  />
                                </div>
          
                                <div className="px-4 py-3 flex flex-col flex-grow">
                                  <h5 className="text-sm font-semibold tracking-tight text-black mb-2 h-[40px] line-clamp-2">
                                    {safeRenderText(event.title || event.name, "Untitled Event")}
                                  </h5>
          
                                  <div className="flex items-start gap-3 mb-2">
                                    <img
                                      src="/location black.svg"
                                      alt="location"
                                      className="w-4 h-4 mt-0.5"
                                    />
                                    <p className="text-xs text-black h-[40px] line-clamp-2">
                                      {getLocationText(event)}
                                    </p>
                                  </div>
          
                                  <div className="flex justify-between items-center text-xs text-black mt-auto mb-4">
                                    <div className="flex items-center gap-2">
                                      <img
                                        src="/calendar_black.svg"
                                        alt="calendar"
                                        className="w-4 h-4"
                                      />
                                      <span>{safeRenderText(event.date || event.end_date, "Date TBD")}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <img
                                        src="/wallet-black.svg"
                                        alt="wallet"
                                        className="w-4 h-4"
                                      />
                                      <span>{safeRenderText(event.fees, "Free")}</span>
                                    </div>
                                  </div>
          
                                  <button
                                    onClick={() => handleRedirect(event)}
                                    className="w-full text-white bg-[#8162ff] hover:bg-[#6b4ff0] rounded-[6px] px-4 py-2 text-sm transition-colors duration-200"
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
          
                      <button
                        className="text-[#8162ff] p-2 rounded-full hover:bg-[#6b4ff0] hover:text-white transition-colors"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </button>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Events;