import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const sceneRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    
    setMousePosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTransform = (depth) => {
    const x = mousePosition.x * depth * 30;
    const y = mousePosition.y * depth * 30;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="min-h-screen overflow-hidden grid grid-rows-3 gap-0 font-sans bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] m-0 p-0">

     <div className='m-0 auto transition-all duration-400 ease-in flex justify-center items-center relative'>
     <div ref={sceneRef} className="scene text w-3/5 h-2/5 min-w-[400px] min-h-[500px] absolute my-10">
            <div 
              className="circle w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px] relative"
              style={{ 
                transform: getTransform(1.2),
                transition: 'transform 0.8s ease-out'
              }}
            >
              
            </div>
            
            <div 
              className="one w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px] absolute"
              style={{ 
                transform: getTransform(0.9),
                transition: 'transform 0.8s ease-out'
              }}
            >
              <div className="content w-[600px] h-[600px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="piece w-[120px] h-[30px] flex absolute rounded-[80px] z-1 right-[15%] top-[18%] bg-gradient-to-r from-[#8077EA] to-[#EB73FF]"></span>
                <span className="piece w-[150px] h-[50px] flex absolute rounded-[80px] z-1 left-[15%] top-[45%] bg-gradient-to-r from-[#8077EA] to-[#EB73FF]"></span>
                <span className="piece w-[70px] h-[20px] flex absolute rounded-[80px] z-1 left-[10%] top-[75%] bg-gradient-to-r from-[#8077EA] to-[#EB73FF]"></span>
              </div>
            </div>
            
            <div 
              className="two w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px] absolute"
              style={{ 
                transform: getTransform(0.6),
                transition: 'transform 0.8s ease-out'
              }}
            >
              <div className="content w-[600px] h-[600px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="piece w-[120px] h-[40px] flex absolute rounded-[80px] z-1 left-[0%] top-[25%] bg-gradient-to-r from-[#FFEDC0] to-[#FF9D87]"></span>
                <span className="piece w-[180px] h-[50px] flex absolute rounded-[80px] z-1 right-[15%] top-[35%] bg-gradient-to-r from-[#FFEDC0] to-[#FF9D87]"></span>
                <span className="piece w-[160px] h-[20px] flex absolute rounded-[80px] z-1 right-[10%] top-[80%] bg-gradient-to-r from-[#FFEDC0] to-[#FF9D87]"></span>
              </div>
            </div>
            
            <div 
              className="three w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px] absolute"
              style={{ 
                transform: getTransform(0.4),
                transition: 'transform 0.8s ease-out'
              }}
            >
              <div className="content w-[600px] h-[600px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="piece w-[80px] h-[20px] flex absolute rounded-[80px] z-1 left-[25%] top-[35%] bg-[#FB8A8A]"></span>
                <span className="piece w-[140px] h-[40px] flex absolute rounded-[80px] z-1 right-[10%] top-[55%] bg-[#FB8A8A]"></span>
                <span className="piece w-[80px] h-[20px] flex absolute rounded-[80px] z-1 left-[40%] top-[68%] bg-[#FB8A8A]"></span>
              </div>
            </div>
            
            <p 
              className="p404 text-[200px] font-bold tracking-wider text-white flex justify-center items-center absolute z-2 w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px]"
              style={{ 
                transform: getTransform(0.2),
                transition: 'transform 0.8s ease-out'
              }}
            >
              404
            </p>
            
            <p 
              className="p404 text-[200px] font-bold tracking-wider text-[#36184F] flex justify-center items-center absolute z-1 w-3/5 h-3/5 top-[20%] left-[20%] min-w-[400px] min-h-[400px] blur-lg opacity-80"
              style={{ 
                transform: getTransform(0.1),
                transition: 'transform 0.8s ease-out'
              }}
            >
              404
            </p>
          </div>
     </div>


     <div className="m-0 auto transition-all duration-400 ease-in flex justify-center items-center relative">
          
          
          <div className="text w-3/5 h-2/5 min-w-[400px] min-h-[500px] absolute my-10">
            <article className="w-[400px] absolute bottom-0 z-4 flex flex-col justify-center items-center text-center left-1/2 transform -translate-x-1/2">
              <p className="text-white text-lg tracking-wider mb-10">Uh oh! Looks like you got lost. <br />Go back to the homepage if you dare!</p>
              <Link to='/'>
                <button className="h-10 px-8 rounded-[50px] cursor-pointer shadow-lg z-3 text-[#695681] bg-white uppercase font-semibold text-xs transition-all duration-300 ease-in hover:shadow-md hover:translate-y-1 hover:bg-[#FB8A8A] hover:text-white">i dare!</button>
              </Link>
            </article>
          </div>
        </div>
    </div>
  );
};

export default NotFound;