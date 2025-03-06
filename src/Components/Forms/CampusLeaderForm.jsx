import React from 'react';
import { Link } from 'react-router-dom';

const CampusLeaderApplicationForm = () => {
  return (
    <div className="min-h-screen bg-[#1d1441] bg-cover bg-center relative" style={{ backgroundImage: "url('/1440x605 (1).jpg')" }}>

         {/* Back Button */}
      <div className="absolute top-0 left-8 text-white flex items-center cursor-pointer">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
       <Link to='/campusLeader'> <span className="text-sm">Back to website</span></Link>
      </div>
      <div className="flex absolute top-6 w-full min-h-[80%]">
        {/* Form Section - Left Side */}
        <div className="w-full md:w-1/2 p-2 flex items-center">
          <div className="w-full max-w-md mx-auto bg-[#170b25]/90 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Name" 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your email ID" 
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Mobile No." 
                />
              </div>
              
              <div className="relative">
                <select className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none">
                  <option value="" disabled selected>Select your position</option>
                  <option value="campus-leader">Campus Leader</option>
                  <option value="ambassador">Ambassador</option>
                  <option value="volunteer">Volunteer</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your College" 
                />
              </div>
              
              <div className="relative">
                <select className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none">
                  <option value="" disabled selected>Select your state</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="west-bengal">West Bengal</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <textarea 
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none h-32" 
                  placeholder="Why do you want to Become Campus Leader?"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right side is empty to show the background image */}
        <div className="w-1/2 hidden md:block"></div>
      </div>
    </div>
  );
};

export default CampusLeaderApplicationForm;