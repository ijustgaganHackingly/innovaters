import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitTextOnScroll from '../SplitText/SplitTextOnScroll';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const rightCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const sectionRef = useRef(null);
  
 

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const animations = [
        {
          element: rightCardRef.current,
          vars: {
            x: "100vw",
            y: "25vh",
            rotate: 50,
            opacity: 0,
          }
        },
        {
          element: centerCardRef.current,
          vars: {
            y: "-100vh",
            opacity: 0,
          }
        },
        {
          element: leftCardRef.current,
          vars: {
            x: "-100vw",
            y: "25vh",
            rotate: -50,
            opacity: 0,
          }
        }
      ];

      animations.forEach(({ element, vars }) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 53%",
            end: "bottom 8%",
            scrub: 2.5,
          },
          ...vars,
          duration: 1,
          ease: "power1.inOut",
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#1d1441] via-[#1a1545] to-[#52447ec3] 
        min-h-[210vh] 
        sm:min-h-[230vh] 
        md:min-h-[270vh] 
        lg:min-h-[160vh] 
        xl:min-h-[180vh]"
    >
   

      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/grid layers[1].png')",
        }}
      />


      <Navbar  />

      <div className="absolute inset-0 z-10 w-full px-4 md:px-8 lg:w-[80%] xl:w-[60%] mx-auto 
        pt-16 
        sm:pt-20 
        md:pt-[12%] 
        lg:pt-[15%] 
        xl:pt-[18%]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4 md:mb-6
            text-xl
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-5xl 
            font-[500] text-white"
          >
            <SplitTextOnScroll
              text="Exclusive Community Platform for Tech Leaders and Visionaries!"
              textClassName="text-white py-2"
            />
          </div>
          <div className="text-center 
            text-sm
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            xl:text-2xl 
            text-white"
          >
            <SplitTextOnScroll
              text="An elite community platform uniting tech leaders, founders, investors, and exceptionally talented students, driving collaboration, entrepreneurship, innovation, and leadership.  "
              textClassName="text-white"
            />
          </div>

         <Link to='/contactForm' > <button className="text-white bg-[#8162ff] rounded-[6px] mx-auto block transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all
            text-xs sm:text-sm md:text-base
            px-6 sm:px-8 md:px-12 lg:px-16
            py-2 sm:py-2.5 md:py-3
            mt-4 sm:mt-5 md:mt-6"
          >
            Join Now
          </button></Link>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-center items-center 
          mt-8 sm:mt-10 md:mt-12 lg:mt-16
          gap-4 sm:gap-5 md:gap-6 lg:gap-0"
        >
          <div
            ref={leftCardRef}
            className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
              bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
              p-3 sm:p-4 md:p-5 lg:p-6
              border border-[#372b59] 
              lg:absolute lg:left-0 lg:-translate-x-24 z-10"
          >
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">
                Hackingly Campus Chapter
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 
              h-[250px] sm:h-[275px] md:h-[300px] 
              overflow-y-scroll scrollbar-hide"
            >
              {[
                {name :"Amity University, Jaipur", img:"/text_bg.png"},
                {name:"JK Lakshmipat University, Jaipur", img:"/jklu.webp"},
                {name:"Panipat Institute of Engineering",img:"l.png"},
               {name: "Amity Universirty, Mumbai",img:"/Mai.png"},
                {name:"Jecrc university",img:"/JU-Logo.png"},
               
              ].map((university, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <img src={university.img} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain rounded-lg flex-shrink-0" />
                  <span className="text-white/90 text-xs md:text-sm">{university.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={centerCardRef}
            className="w-full sm:w-[350px] xl:w-[400px] bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-[#372b59] z-20"
          >
            <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">Campus Leaderboard</h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 h-[250px] sm:h-[275px] md:h-[300px] overflow-y-scroll scrollbar-hide">
              {[
                { name: 'Aryan Khandelwal', college: 'Maharishi arvind institute of science and management ', trophyImage: '/medal-1.png' },
                { name: 'Animesh Kumar Singh', college: 'Ambedkar DSEU Shakarpur Campus-1', trophyImage: '/medal-2.png' },
                { name: 'Arshad Khan', college: 'Lakshmi Narain College of Technology Excellence (LNCTE) bhopal ', trophyImage: '/medal-3.png' },
                { name: "Nitesh Kumar", college: "Aligarh College of Engineering ", trophyImage: "/trophy 3.svg" },
                { name: "Aniket Agarwal", college: "Lnct Bhopal", trophyImage: "/trophy 3.svg" },
                { name: "Umanshi Gupta", college: "Lakshami Narain College", trophyImage: "/trophy 3.svg" },
                { name: "Yaman Sain", college: "Poornima College of Engineering", trophyImage: "/trophy 3.svg" },
                { name: "Kavan Bhavsar", college: "Government Polytechnic Ahmedabad", trophyImage: "/trophy 3.svg" },
                { name: "Ujjwal Agarwal ", college: "Maharaja Surajmal Institute, GGSIPU New Delhi ", trophyImage: "/trophy 3.svg" },
                { name: "Pranav Beniwal ", college: "Parul university ", trophyImage: "/trophy 3.svg" },
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={user.trophyImage}
                    alt={`${user.name} trophy`}
                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />

                  <div>
                    <p className="text-white text-xs md:text-sm font-medium">{user.name}</p>
                    <p className="text-white/60 text-xs">{user.college}</p>
                  </div>
                </div>
              ))}
            </div>
            <img 
              src="/3d-gold-trophy-books-stack-graduation-cap 2.png"
              alt="Trophy decoration"
              className="absolute bottom-4 right-0 
                w-32 sm:w-18 md:w-28 lg:w-28 xl:w-32 
                h-32 sm:h-18 md:h-28 lg:h-28 xl:h-32 
                opacity-50"
            />
          </div>

          <div
            ref={rightCardRef}
            className="w-full sm:w-[350px] lg:w-[300px] xl:w-[350px] 
              bg-[#1a1528]/95 backdrop-blur-sm rounded-2xl 
              p-3 sm:p-4 md:p-5 lg:p-6
              border border-[#372b59] 
              lg:absolute lg:right-0 lg:translate-x-24 z-10"
          >
            <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-6">
              Startup Community
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 
              h-[250px] sm:h-[275px] md:h-[300px] 
              overflow-y-scroll scrollbar-hide"
            >
              {[{name: "Ambixous", img:"/Ambixous.png"}, {name: "World we desire",img:"/world we desire.png"}, { name:"ECH UoR",img:"/ECH.png" }, { name:"Incubation center",img:"/Incubation.png" }, { name:"Amity Mumbai",img:"/Amity IC.png" } ].map(
                (startup, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <img src={startup.img} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 object-cover bg-white/10  md:h-10 rounded-lg flex-shrink-0" />
                   
                    <span className="text-white/90 text-xs md:text-sm">{startup.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;