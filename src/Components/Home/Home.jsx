
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer/Footer";
import EventCards from "../Card/EventCard";
import SplitTextOnScroll from "../SplitText/SplitTextOnScroll";
import KeySegments from "../Key/KeySegments";
import HeroSection from "../hero/HeroSection";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

export function Home() {


  const innovators = [
    {
      img : "/potential.png",
      title: "Unlock Your Innovation Potential",
      description: " Join Innovators to access exclusive resources, mentorship, and networking opportunities that enhance your tech journey."
    },
    {
      img : "/industry.png",
      title: "Connect With Industry Leaders",
      description: " Engage with founders, investors, and tech experts to drive collaboration and growth within a dynamic network."
    },
    {
      img : "/Change.png",
      title: " Drive Impactful Change Together", 
      description: " Work together on impactful projects and initiatives that tackle real-world challenges while developing your professional skills."
    }
  ];



  return (
    <>
 <HeroSection/>
<KeySegments/>
      <div className="relative h-[600px] sm:h-[600px] md:h-[550px] lg:h-[500px] w-full bg-gradient-to-t from-[#52447ec3] via-[#2b1d5c] to-[#1d1441] flex flex-col items-center justify-center z-50 px-4 sm:px-6 lg:px-8">

  <div className="relative w-full flex flex-col items-center justify-center mb-4">

    <div
      className="grid mt-4 relative"
      style={{
        gridTemplateColumns: "repeat(17, 1fr)",
        width: "95%",
        "@media (minWidth: 640px)": { width: "90%" },
        "@media (minWidth: 768px)": { width: "85%" },
        "@media (minWidth: 1024px)": { width: "80%" },
      }}
    >
      {Array.from({ length: 17 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(16, 1fr)",
        width: "90%",
        "@media (minWidth: 640px)": { width: "85%" },
        "@media (minWidth: 768px)": { width: "80%" },
        "@media (minWidth: 1024px)": { width: "76%" },
      }}
    >
      {Array.from({ length: 16 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    <div
      className="grid mt-0 relative"
      style={{
        gridTemplateColumns: "repeat(14, 1fr)",
        width: "85%",
        "@media (minWidth: 640px)": { width: "80%" },
        "@media (minWidth: 768px)": { width: "75%" },
        "@media (minWidth: 1024px)": { width: "70%" },
      }}
    >
      {Array.from({ length: 14 }, (_, index) => (
        <div
          key={index}
          className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
        />
      ))}
    </div>

    <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-full px-4">
      <SplitTextOnScroll
        text="Why Innovators ?"
        textClassName="text-center font-[500]  text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white"
      />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4 sm:mt-6 lg:mt-8 w-[90%] sm:w-[85%] lg:w-[80%] justify-center items-start">
    {innovators.map((item, index) => (
      <div key={index} className="text-white">
        <div className="flex flex-row items-center">
          <img src={item.img} className="object-cover w-6 h-6 sm:w-9 sm:h-9 mb-4"/>
          <h3 className="text-lg sm:text-xl font-medium mb-3 ml-3 flex">{item.title}</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</div>



<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">

  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "95%",
      "@media (minWidth: 640px)": { width: "90%" },
      "@media (minWidth: 768px)": { width: "85%" },
      "@media (minWidth: 1024px)": { width: "80%" },
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "90%",
      "@media (minWidth: 640px)": { width: "85%" },
      "@media (minWidth: 768px)": { width: "80%" },
      "@media (minWidth: 1024px)": { width: "76%" },
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "85%",
      "@media (minWidth: 640px)": { width: "80%" },
      "@media (minWidth: 768px)": { width: "75%" },
      "@media (minWidth: 1024px)": { width: "70%" },
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full px-4">
    <SplitTextOnScroll
      text="Who Can Join Innovators ?"
      textClassName="text-center font-[500]  text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white"
    />
  </div>
</div>

<div className="w-full p-4 sm:p-6 lg:p-8 relative h-auto sm:h-[400px] md:h-[300px] lg:h-[250px] bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div className="flex flex-col sm:flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="/Working Professional.png"
        alt="Working Professionals"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-12 md:px-16 lg:px-20 py-2 bg-white/10 backdrop-blur-md rounded-full cursor-default">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Working Professionals
        </span>
      </button>
    </div>

    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="/Students.jpg"
        alt="Students"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-12 md:px-16 lg:px-20 py-2 bg-white/10 backdrop-blur-md rounded-full cursor-default">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Students
        </span>
      </button>
    </div>

    <div className="relative w-full md:w-[200px] lg:w-[350px] h-[200px] overflow-hidden rounded-3xl">
      <img
        src="/Startup Founders.jpg"
        alt="Startup Founders"
        className="w-full h-full object-cover"
      />
      <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 sm:px-8 md:px-10 lg:px-12 py-2 bg-white/10 backdrop-blur-md rounded-full cursor-default">
        <span className="text-white font-medium text-base lg:text-lg whitespace-nowrap">
          Startup Founders
        </span>
      </button>
    </div>
  </div>
</div>

<div>
<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
      width: "95%",
      "@media (minWidth: 640px)": { width: "90%" },
      "@media (minWidth: 768px)": { width: "85%" },
      "@media (minWidth: 1024px)": { width: "80%" },
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
      width: "90%",
      "@media (minWidth: 640px)": { width: "85%" },
      "@media (minWidth: 768px)": { width: "80%" },
      "@media (minWidth: 1024px)": { width: "76%" },
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
      width: "85%",
      "@media (minWidth: 640px)": { width: "80%" },
      "@media (minWidth: 768px)": { width: "75%" },
      "@media (minWidth: 1024px)": { width: "70%" },
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full px-4">
    <SplitTextOnScroll
      text="Top Events"
      textClassName="text-center font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-extrabold text-white"
    />
  </div>
  
</div>
<div>

<div className=" relative h-auto w-50% bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50  min-h-screen ">
      <div className="absolute inset-0">

        {[...Array(200)].map((_, index) => {
          const row = Math.floor(index / 15);
          const col = index % 15;
          return (
            <div
              key={index}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-600/15"
              style={{
                left: `${(col * 8.5) + 2.5}%`,
                top: `${(row * 7.5) + 2.5}%`,
              }}
            />
          )}
        )}
      </div>
      
      <div className="relative z-10 ">
        
        <EventCards/>
      </div>
    </div>
</div>

    <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div
    className="grid w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid w-[90%] sm:w-[85%] md:w-[80%] lg:w-[76%]"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%]"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>
</div>

<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-[80%] ml-10 sm:ml-20 lg:ml-32 xl:ml-40  bg-[#1d1441] flex flex-col items-center justify-center z-50">
  <SplitTextOnScroll
    text="Join Innovators and Experience the Boundless Opportunities Ahead! "
    textClassName="text-center font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white pb-4 px-4"
  />
  <Link to='/contactForm'><button className="text-white transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all bg-[#8162ff] rounded-[6px] px-12 sm:px-16 md:px-20 lg:px-24 hover:opacity-80 py-2 sm:py-3 mt-4 sm:mt-5 text-sm sm:text-base">
    Join Now
  </button></Link>
</div>

<div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] flex flex-col items-center justify-center z-50">
  <div
    className="grid w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%]"
    style={{
      gridTemplateColumns: "repeat(14, 1fr)",
    }}
  >
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid w-[90%] sm:w-[85%] md:w-[80%] lg:w-[76%]"
    style={{
      gridTemplateColumns: "repeat(16, 1fr)",
    }}
  >
    {Array.from({ length: 16 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-30 aspect-square"
      />
    ))}
  </div>

  <div
    className="grid w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]"
    style={{
      gridTemplateColumns: "repeat(17, 1fr)",
    }}
  >
    {Array.from({ length: 17 }, (_, index) => (
      <div
        key={index}
        className="bg-transparent border border-[#372b59] opacity-75 aspect-square"
      />
    ))}
  </div>
</div>
</div>

      <Footer />
    </>
  ); 
}

export default Home;
