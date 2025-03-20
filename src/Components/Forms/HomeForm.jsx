import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../helper/axiosinstace';
import { BASE_URL } from '../../../constants';

const HomeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    position: '',
    college: '',
    state: '',
    city: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.number.trim()) {
      newErrors.number = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }
    
    if (!formData.position) {
      newErrors.position = 'Position is required';
      isValid = false;
    }
    
    if (!formData.state) {
      newErrors.state = 'State is required';
      isValid = false;
    }
    
    if (!formData.city) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axiosInstance.post(`${BASE_URL}/home`, formData);
      alert('Application submitted successfully!');
      navigate('/campusLeader');
    } catch (err) {
      console.error('Error submitting form:', err);
      
      if (err.response?.status === 40) {
        setGeneralError('You have already submitted an application. We will get back to you soon.');
      } else if (err.response?.data?.message) {
        setGeneralError(err.response.data.message);
      } else {
        setGeneralError('Failed to submit application. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1d1441] relative">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: "url('/Home.png')" }}
      ></div>
      
      <div className="absolute top-8 left-8 z-20">
        <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="text-sm font-medium">Back to website</span>
        </Link>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 py-16">
        <div className="w-full max-w-md bg-[#170b25]/90 p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
          
          {generalError && (
            <div className="mb-4 p-3 bg-red-500/80 text-white rounded text-center">
              {generalError}
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-2 border-red-500' : ''}`}
                placeholder="Enter your Name *"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-2 border-red-500' : ''}`}
                placeholder="Enter your email ID *"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.number ? 'border-2 border-red-500' : ''}`}
                placeholder="Enter your Mobile No. (10 digits) *"
              />
              {errors.number && <p className="text-red-400 text-xs mt-1">{errors.number}</p>}
            </div>
            
            <div>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your College/University Name"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.state ? 'border-2 border-red-500' : ''}`}
                placeholder="Enter your State *"
              />
              {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
            </div>
            
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.city ? 'border-2 border-red-500' : ''}`}
                placeholder="Enter your City *"
              />
              {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
            </div>
            
            <div className="relative">
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.position ? 'border-2 border-red-500' : ''}`}
              >
                <option value="" disabled>Select your position *</option>
                <option value="campusleader">Campus Leader</option>
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
              {errors.position && <p className="text-red-400 text-xs mt-1">{errors.position}</p>}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded transition duration-300 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
            
            <p className="text-white text-xs text-center mt-4">
              Fields marked with * are required
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;