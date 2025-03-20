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
    localStorage.removeItem('name');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (isMenuOpen) {
      scrollPosition.current = window.pageYOffset;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';

      const handleTouchMove = (e) => {
        e.preventDefault();
      };
      document.addEventListener('touchmove', handleTouchMove, { passive: false }); 

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        window.scrollTo(0, scrollPosition.current);

        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMenuOpen]);

  const getAvatarLetters = (name) => {
    if (!name) return '';
    const middleIndex = Math.floor(name.length / 2);
    const firstNameInitial = name[0] ? name[0].toUpperCase() : '';
    const lastNameInitial = name[middleIndex] ? name[middleIndex].toUpperCase() : '';
    return firstNameInitial + lastNameInitial;
  };

  return (
    <>
      <nav className="relative w-full bg-transparent h-16 px-4 sm:px-6 lg:px-8 z-50">
        <div className="h-full flex items-center justify-between">
          <div className="absolute left-2">
          
            <Link to="/" className="hidden md:block">
              <img
                src="/8.png"
                alt="Logo"
                className="h-11 py-1 px-3"
              />
            </Link>
            
            <button
              className="md:hidden flex items-center justify-center"
              onClick={toggleMenu}
            >
              <img 
                src='/icon.png' 
                alt="Logo" 
                className="h-14 py-1 px-3"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex items-center  space-x-6 text-white text-base font-bold">
              <li className=''><Link to="/campusLeader" className="hover:text-gray-300">Campus Leaders</Link></li>
              <li><Link to="/chapter" className="hover:text-gray-300">Chapters</Link></li>
              <li><Link to="/professionals" className="hover:text-gray-300">Professionals</Link></li>
              <li><Link to="/startup" className="hover:text-gray-300">Startup</Link></li>
              <li><Link to="/faculty" className="hover:text-gray-300">Faculty Advisors</Link></li>
            </ul>
          </div>

          <div className="absolute right-2 md:right-4">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-purple-600 font-bold uppercase"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', color: '#8162ff' }}
                  >
                    {getAvatarLetters(user.name)}
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      {user.role !== "user" && (
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
                        </li>
                      )}

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
              <Link to='/campusLeader' onClick={toggleMenu}>Campus leaders</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/chapter' onClick={toggleMenu}>Chapters</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/professionals' onClick={toggleMenu}>Professionals</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/startup' onClick={toggleMenu}>Startup</Link></li>
            <li className="hover:text-gray-300 cursor-pointer"><Link to='/faculty' onClick={toggleMenu}>Faculty advisors</Link></li>
          </ul>
          <button
            className="absolute top-4 right-4 text-white w-12 h-12 flex items-center justify-center"
            onClick={toggleMenu}
          >
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;