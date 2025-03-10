// Add this to your CampusLeaderApplicationForm component
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Make sure to install axios: npm install axios
import axiosInstance from '../helper/axiosinstace';
import { BASE_URL } from '../../../constants';

const CampusLeaderApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    position: '',
    collegeName: '',
    state: '',
    purpose: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log(formData)
    try {
      if (!formData.name || !formData.email || !formData.number || 
          !formData.position || !formData.collegeName || 
          !formData.state || !formData.purpose) {
        throw new Error('Please fill all required fields');
      }
      
      const response = axiosInstance.post(`${BASE_URL}/campusLeader`, formData);
      
      alert('Application submitted successfully!');
      navigate('/campusLeader'); 
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to submit application');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] overflow-hidden bg-[#1d1441] bg-cover bg-center relative" style={{ backgroundImage: "url('../../../public/WhatsApp Image 2025-03-07 at 16.06.16_ec431544.jpg')" }}>
  
      <div className="absolute top-0 left-8 text-white flex items-center cursor-pointer">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <Link to='/campusLeader'><span className="text-sm">Back to website</span></Link>
      </div>
      <div className="flex justify-center absolute top-6 w-full min-h-[80%]">
 
        <div className="w-full md:w-1/2 p-2 flex items-center">
          <div className="w-full max-w-md mx-auto bg-[#170b25]/90 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
            
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Name" 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your email ID" 
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Mobile No." 
                />
              </div>
              
              <div className="relative">
                <select 
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none"
                >
                  <option value="" disabled>Select your position</option>
                  <option value="campusleader">Campus Leader</option>
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
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your College" 
                />
              </div>
              
              <div className="relative">
                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none"
                >
                  <option value="" disabled>Select your state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <textarea 
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none h-32" 
                  placeholder="Why do you want to Become Campus Leader?"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded transition duration-300 disabled:bg-indigo-300"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
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