import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const scrollPosition = useRef(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (isMenuOpen) {
      scrollPosition.current = window.pageYOffset;
      
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
      
      const handleTouchMove = (e) => {
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollPosition.current);
        
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
              src="/8.png"
              alt="Logo"
              className="hidden md:flex h-14 py-1 px-3"
            />
            <img src='/icon.png' alt="Logo" className="md:hidden h-14 py-1 px-3"/>
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
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              ) : (
                <g fill="white">
                  <circle cx="50" cy="50" r="20" fill="white" />
                  <rect x="48" y="10" width="4" height="80" fill="white" />
                  <rect x="10" y="48" width="80" height="4" fill="white" />
                </g>
              )}
            </svg>
          </button>
          
          <div className="absolute right-2 md:right-4">
            {user ? (
              <div className="relative">
                <button
                  className="bg-[#8162ff] text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
                  onClick={toggleDropdown}
                >
                  {user.name}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link  to={`/${user.role}/dashboard`}>Dashboard</Link>
                        {/* <button onClick={console.log(user.role)}>dashboard</button> */}
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-[#8162ff] text-white py-2 px-8 xl:px-12 rounded-[6px] hover:opacity-80 text-sm"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#1d1441] bg-opacity-95 flex flex-col justify-center items-center z-40"
          style={{ width: '100vw', height: '100vh', touchAction: 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-6 p-6 text-white text-3xl font-bold text-center">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to='/campusLeader'>Campus leaders</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/chapter' >Chapters</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/professionals' >Professionals</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/startup' >Startup</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/faculty' >Faculty advisors</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;