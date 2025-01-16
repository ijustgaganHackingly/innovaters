// import React from 'react';
// import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <nav className="bg-transparent h-16 flex items-center px-8  ">
      <div className="flex items-center w-full">
        {/* Logo */}
        <div className="text-black bg-white font-bold text-sm py-1 px-3">LOGO</div>

        {/* Navigation Links */}
        <div className='flex items-center justify-center ml-auto  '>
        <ul className="flex gap-4 ml-auto text-sm text-white font-medium">
          <li>Page-1</li>
          <li>&bull;</li>
          <li> Page-2</li>
            <li>&bull;</li>
          <li>Page-3</li>
        </ul>
        </div>

        {/* Login Button */}
        <button className="ml-auto bg-[#8162ff]  text-white py-2 px-12  rounded-[6px] hover:opacity-80" onClick={handleLoginClick } >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar


