import React from 'react';

const FooterCampus = () => {
  return (
    <footer className="w-full">
      <header className="w-full flex justify-center py-6">
        <div className="max-w-6xl w-full flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/Logo 2.png" // Corrected path: Assuming the 'public' folder is the root
              alt="Hackingly Logo"
              className="h-10"
            />
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-gray-700">
            <a href="#" className="hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="hover:text-gray-900">
              Our Events
            </a>
            <a href="#" className="hover:text-gray-900">
              Explore Chapters
            </a>
          </nav>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4">
        {/* Divider line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Footer content */}
        <div className="flex flex-col items-center justify-center py-6 text-sm text-gray-600">
          <p className="mb-2">© 2024 Hackingly™. All Rights Reserved.</p>
          <p className="flex items-center">
            Crafted with
            <span className="text-red-500 mx-1">❤</span>
            by Giby Technologies Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCampus;