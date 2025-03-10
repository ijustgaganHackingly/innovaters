import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../constants';
import axiosInstance from '../helper/axiosinstace';

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    profession: '',
    company: '',
    address: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await axiosInstance.post(`${BASE_URL}/professional`, formData);
      console.log('Application submitted:', response.data);
      navigate('/professionals');
    } catch (err) {
      console.error('Error submitting application:', err.response?.data?.error || err.message);
      setError(err.response?.data?.error || 'An error occurred while submitting the application.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1441] bg-cover bg-center relative" style={{ backgroundImage: "url('/1440x605 (3).jpg')" }}>

      <div className="absolute top-8 left-8 text-white flex items-center cursor-pointer">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
       <Link to='/professionals'> <span className="text-sm">Back to website</span></Link>
      </div>
      <div className="flex absolute top-32 w-full min-h-[80%]">
     
        <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
          <div className="w-full max-w-md mx-auto bg-[#170b25]/90 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <div className="text-red-500">{error}</div>}
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Name" 
                  required
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
                  required
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
                  required
                />
              </div>

              <div>
                <input 
                  type="text" 
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Profession" 
                  required
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Company" 
                  required
                />
              </div>
              
              
              <div>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none" 
                  placeholder="Enter your Area" 
                  required
                />
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
        
        <div className="w-1/2 hidden md:block"></div>
      </div>
    </div>
  );
};

export default ProfessionalForm;