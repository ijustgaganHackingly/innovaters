// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] text-white p-8">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start mb-16">
//           {/* Logo and Navigation */}
//           <div className="mb-8 md:mb-0">
//             <div className="bg-white text-black px-4 py-1 inline-block mb-6">
//               LOGO
//             </div>
//             <nav className="flex gap-8">
//               <a href="#" className="hover:underline">Link One</a>
//               <a href="#" className="hover:underline">Link Two</a>
//               <a href="#" className="hover:underline">Link Three</a>
//               <a href="#" className="hover:underline">Link Four</a>
//               <a href="#" className="hover:underline">Link Five</a>
//             </nav>
//           </div>

//           {/* Subscribe Form */}
//           <div className="w-full md:w-auto">
//             <h3 className="text-lg mb-4">Subscribe</h3>
//             <div className="flex flex-col w-[70%] sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 bg-transparent border border-white rounded text-white w-full sm:w-80"
//               />
//               <button className="bg-[#8162ff] text-white px-14 py-2 rounded-[6px] ">
//                 Subscribe
//               </button>
//             </div>
//             <p className="text-sm mt-2">
//               By subscribing you agree to with our{' '}
//               <a href="#" className="underline">Privacy Policy</a>
//             </p>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
//           {/* Legal Links */}
//           <div className="flex gap-6 mb-4 md:mb-0">
//             <a href="#" className="hover:underline">Privacy Policy</a>
//             <a href="#" className="hover:underline">Terms of Service</a>
//             <a href="#" className="hover:underline">Cookies Settings</a>
//           </div>

//           {/* Copyright and Credits */}
//           <div className="flex flex-col sm:flex-row gap-2 items-center text-sm">
//             <span>© 2024 Hakingly. All rights reserved.</span>
//             <div className="flex items-center">
//               <span>Crafted with</span>
//               <span className="text-red-500 mx-1">❤</span>
//               <span>by Giby Technologies Pvt. Ltd.</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] text-white p-4 sm:p-6 lg:p-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 lg:mb-16">
          {/* Logo and Navigation */}
          <div className="w-full lg:w-auto">
            <div className="bg-white text-black px-4 py-1 inline-block mb-6">
              LOGO
            </div>
            <nav className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
              <a href="#" className="hover:underline">Link One</a>
              <a href="#" className="hover:underline">Link Two</a>
              <a href="#" className="hover:underline">Link Three</a>
              <a href="#" className="hover:underline">Link Four</a>
              <a href="#" className="hover:underline">Link Five</a>
            </nav>
          </div>

          {/* Subscribe Form */}
          <div className="w-full lg:w-auto">
            <h3 className="text-lg mb-4">Subscribe</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl lg:max-w-none">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-transparent border border-white rounded text-white w-full sm:w-80"
              />
              <button className="bg-[#8162ff] text-white px-8 sm:px-14 py-2 rounded-[6px] whitespace-nowrap">
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
        <div className="pt-8 border-t border-gray-700 flex flex-col gap-6 lg:flex-row lg:gap-0 justify-between items-center">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>

          {/* Copyright and Credits */}
          <div className="flex flex-col sm:flex-row gap-2 items-center text-sm text-center lg:text-left">
            <span>© 2024 Hakingly. All rights reserved.</span>
            <div className="flex items-center flex-wrap justify-center">
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