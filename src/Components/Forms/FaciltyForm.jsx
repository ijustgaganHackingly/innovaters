import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../constants';
import axiosInstance from '../helper/axiosinstace';

const FacultyForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    institute: '', 
    email: '',
    number: '',
  });

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

    try {
      if (!formData.name || !formData.position || !formData.department ||
        !formData.institute || !formData.email || !formData.number) { 
        throw new Error('Please fill all required fields');
      }

      const response = await axiosInstance.post(`${BASE_URL}/faculty`, formData);

      alert('Application submitted successfully!');
      navigate('/faculty');

    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || err.message || 'Failed to submit application');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1441] bg-cover bg-center relative" style={{ backgroundImage: "url('/Faculty Advisors.png')" }}>

      <div className="absolute top-8 left-8 text-white flex items-center cursor-pointer">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <Link to='/faculty'> <span className="text-sm">Back to website</span></Link>
      </div>
      <div className="flex absolute top-32 w-full min-h-[80%]">

        <div className="w-full md:w-1/2 p-2 flex items-center">
          <div className="w-full max-w-md mx-auto bg-[#170b25]/90 p-8 rounded-lg">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  <option value="faculty">Faculty</option>
                  <option value="tpo">TPO</option>
                  <option value="student">Student</option>
                  <option value="collageadmin">College Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your Institute Name"
                  name="institute" 
                  value={formData.institute} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                  placeholder="Enter your Mobile No."
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded transition duration-300"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
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

export default FacultyForm;