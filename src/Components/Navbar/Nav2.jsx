import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollPosition = useRef(0);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle body scroll locking when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      scrollPosition.current = window.pageYOffset;
      
      // Apply multiple techniques to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
      
      // Prevent touchmove events
      const handleTouchMove = (e) => {
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        // Cleanup all scroll locks
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition.current);
        
        // Remove touchmove handler
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative w-full bg-transparent h-16 px-4 sm:px-6 lg:px-8 z-50">
        <div className="h-full flex items-center justify-center">
          <div className="absolute left-2">
            <img
              src="/public/Logo 2.png"
              alt="Logo"
              className="hidden md:flex h-14 py-1 px-3"
            />
            <img src='/public/icon.png' alt="Logo" className="md:hidden h-14 py-1 px-3"/>
          </div>
          
          <button
            className="text-white w-12 h-12 flex items-center justify-center z-50"
            onClick={toggleMenu}
          >
            <svg
              viewBox="0 0 100 100"
              className={`w-30 h-30 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
            >
              {isMenuOpen ? (
                <path
                  d="M20 20 L80 80 M80 20 L20 80"
                  stroke="black"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              ) : (
                <g fill="white">
                  <circle cx="50" cy="50" r="20" fill="#1d1441" />
                  <rect x="48" y="10" width="4" height="80" fill="black" />
                  <rect x="10" y="48" width="80" height="4" fill="black" />
                </g>
              )}
            </svg>
          </button>
          
          {/* Login Button */}
          <div className="absolute right-2 md:right-4">
            <button
              className="bg-[#8162ff] text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center z-40"
          style={{ width: '100vw', height: '100vh', touchAction: 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-6 p-6 text-black text-5xl font-bold text-center">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to='/campusLeader' onClick={toggleMenu}>Campus leaders</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/chapter'>Chapters</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/professionals' onClick={toggleMenu}>Professionals</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/startup' onClick={toggleMenu}>Startup</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/faculty' onClick={toggleMenu}>Faculty advisors</Link></li>
            {/* <li className="hover:text-gray-300 cursor-pointer">Platform</li>
            <li className="hover:text-gray-300 cursor-pointer">Events page</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li> */}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav2;