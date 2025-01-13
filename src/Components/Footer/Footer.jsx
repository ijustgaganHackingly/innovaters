import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1646] text-white p-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Logo and Navigation */}
          <div className="mb-8 md:mb-0">
            <div className="bg-white text-black px-4 py-1 inline-block mb-6">
              LOGO
            </div>
            <nav className="flex gap-8">
              <a href="#" className="hover:underline">Link One</a>
              <a href="#" className="hover:underline">Link Two</a>
              <a href="#" className="hover:underline">Link Three</a>
              <a href="#" className="hover:underline">Link Four</a>
              <a href="#" className="hover:underline">Link Five</a>
            </nav>
          </div>

          {/* Subscribe Form */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg mb-4">Subscribe</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-transparent border border-white rounded text-white w-full sm:w-80"
              />
              <button className="bg-[#52487a] text-white px-6 py-2 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-2">
              By subscribing you agree to with our{' '}
              <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          {/* Legal Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>

          {/* Copyright and Credits */}
          <div className="flex flex-col sm:flex-row gap-2 items-center text-sm">
            <span>© 2024 Hakingly. All rights reserved.</span>
            <div className="flex items-center">
              <span>Crafted with</span>
              <span className="text-red-500 mx-1">❤</span>
              <span>by Giby Technologies Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;