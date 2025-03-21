import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../constants'
import axiosInstance from '../helper/axiosinstace';

const ChaptersForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    position: '',
    college: '',
    state: '',
    purpose: ''
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
      if (!formData.name || !formData.email || !formData.number ||
        !formData.position || !formData.college ||
        !formData.state || !formData.purpose) {
        throw new Error('Please fill all required fields');
      }

      const response = await axiosInstance.post(`${BASE_URL}/chapter`, formData);

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
    <div className="min-h-screen w-full relative">
      <div 
        className="absolute inset-0 w-full h-full bg-[#1d1441] bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: "url('/chapter.png')" }}
      />
      
      <div className="absolute top-8 left-8 z-20">
        <Link to='/chapter' className="flex items-center text-white hover:text-gray-200 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="text-sm font-medium">Back to website</span>
        </Link>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 py-16">
        <div className="w-full max-w-md bg-[#170b25]/90 p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Apply to join now!</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/80 text-white rounded text-center">
              {error}
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email ID *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your Mobile No. *"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <select
                className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your position *</option>
                <option value="student">Student</option>
                <option value="hod/faculty">HOD/faculty</option>
                <option value="tpo">TPO</option>
                <option value="college admin">College Admin</option>
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
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your College *"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <select
                className="w-full px-4 py-3 rounded bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your state *</option>
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal-pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya-pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west-bengal">West Bengal</option>
                <option value="andaman-and-nicobar-islands">Andaman and Nicobar Islands</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="dadra-and-nagar-haveli-and-daman-and-diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="delhi">Delhi</option>
                <option value="jammu-and-kashmir">Jammu and Kashmir</option>
                <option value="ladakh">Ladakh</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="puducherry">Puducherry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div>
              <textarea
                className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                placeholder="Why do you want to open Our Chapter in Your College? *"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
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
}

export default ChaptersForm;