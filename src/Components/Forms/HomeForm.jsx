import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you could add code to send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      mobile: '',
      position: ''
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1d1441] bg-cover bg-center relative" style={{ backgroundImage: "url('/1440x605 (1).jpg')" }}>
   
      <div className="absolute top-0 left-8 text-white flex items-center cursor-pointer">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <Link to='/campusLeader'><span className="text-sm">Back to website</span></Link>
      </div>
      
      <div className="flex absolute top-6 w-full min-h-[80%]">
 
        <div className="w-full md:w-1/2 p-2 flex items-center">
          <div className="w-full max-w-md mx-auto bg-[#170b25]/90 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your Mobile No."
                  required
                />
              </div>
              
              <div className="relative">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Select your position</option>
                  <option value="campus-leader">Campus Leader</option>
                  <option value="chapter">Chapter</option>
                  <option value="professional">Professional</option>
                  <option value="faculty">Faculty</option>
                  <option value="startup">Startup</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
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

export default HomeForm;