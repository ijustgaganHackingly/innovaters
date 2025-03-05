import React from 'react';
import Nav2 from '../Navbar/Nav2';

const CampusLeaderForm = () => {
  return (
    <div className='bg-white h-full'>
    <Nav2/>
      {/* <Navbar/>  You can uncomment this line if you have a Navbar component */}
      <div className="flex flex-row max-w-6xl mx-auto py-12 px-8 w-full h-full">
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hackingly Campus Leader <br />
            Form
          </h1>
          <p className="text-gray-700 mb-6">
            Hey there, <br />
            Thank you for showing interest in Hackingly Campus Leader Program
          </p>

          <p className="text-gray-700 font-bold mb-2">Become a Hackingly Campus Leader:</p>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-gray-700">Spread the Hackingly buzz among your peers & network!</li>
            <li className="text-gray-700">Scale up student programs & campaigns with us!</li>
            <li className="text-gray-700">Dive into college societies & groups for maximum impact!</li>
          </ul>

          <p className="text-gray-700 font-bold mb-2">Join us if you're:</p>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-gray-700">Energetic & social media savvy</li>
            <li className="text-gray-700">Communication skills on point</li>
            <li className="text-gray-700">Marketing & networking enthusiast</li>
            <li className="text-gray-700">College campus rockstar</li>
          </ul>

          <p className="text-gray-700 font-bold mb-2">Hack your perks with Hackingly:</p>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-gray-700">Score jobs & internships in MNCs!</li>
            <li className="text-gray-700">Get certificates & goodies!</li>
            <li className="text-gray-700">Network with industry experts!</li>
            <li className="text-gray-700">Attend career development workshops!</li>
            <li className="text-gray-700">Explore industry visits across India!</li>
            <li className="text-gray-700">Receive career guidance by MAANG experts!</li>
          </ul>

          <p className="text-gray-700 font-bold">LET'S CO CREATE, JOIN US NOW !!</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8 bg-gradient-to-b from-[#1d1441] via-[#2b1d5c] to-[#52447ec3] rounded-xl shadow-lg h-[110vh] overflow-scroll">
          <h2 className="text-white text-2xl font-semibold mb-6">Registration Form</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email ID *</label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone no. *
                  <br />
                  <small className="text-gray-400 text-xs">Preferably the one you use on Whatsapp</small>
                </label>
                <input
                  type="tel"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name & City of your College *</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Branch & Year of study *</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Share your Linkedin Profile link *</label>
                <input
                  type="url"
                  className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Where did you hear about us? *</label>
              <select
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select...</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="youtube">YouTube</option>
                <option value="wordofmouth">Word of Mouth</option>
                <option value="facebook">Facebook</option>
                <option value="collegetpo">College TPO's</option>
                <option value="mail">Mail</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Explain Hackingly in your own words? *</label>
              <textarea
                rows="1"
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                How will you promote Hackingly in your college/ to your friends/ students in general? *
              </label>
              <textarea
                rows="1"
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">What are your key strengths? *</label>
              <textarea
                rows="1"
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Why you want this role? *</label>
              <textarea
                rows="1"
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Any past experience in leading or building community, we have brownie points for this one!! *
              </label>
              <textarea
                rows="1"
                className="w-full bg-white border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampusLeaderForm;