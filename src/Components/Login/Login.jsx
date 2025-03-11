import React, { useState } from 'react';
import axiosInstance from '../helper/axiosinstace';
import { BASE_URL } from '../../../constants';
import ForgotPasswordModal from './ForgetPasswordModal';
import { jwtDecode} from 'jwt-decode'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // For OTP flow

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setOtp('');
    setErrorMessage('');
    setSuccessMessage('');
    setIsOtpSent(false);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setIsOtpSent(true);
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Registration failed');
      setSuccessMessage('');
    }
  };

  const verifyRegistrationOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(`${BASE_URL}/auth/verify-register`, {
        email,
        otp,
      });

      setSuccessMessage(response.data.message); 
      setErrorMessage('');
      setIsLogin(true); 
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'OTP verification failed');
      setSuccessMessage('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post(`${BASE_URL}/auth/login`, {
        email,
        password,
        role,
      });
  
      const { token } = response.data;
  
      if (!token) {
        throw new Error('Token is missing in the response');
      }
  
      const decodedToken = jwtDecode(token);

      console.log("decoded " , decodedToken)
      const { userId, role: userRole } = decodedToken;
  
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('role', userRole);


  
      setErrorMessage('');
      setSuccessMessage('Login successful!');
  
      window.location.href = '/';
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMessage(error.response?.data?.error || 'Login failed');
      setSuccessMessage('');
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/auth/forgot-password`, {
        email,
      });

      setSuccessMessage(response.data.message); 
      setErrorMessage('');
      setIsOtpSent(true); 
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Failed to send OTP');
      setSuccessMessage('');
    }
  };

  const verifyResetOtp = async (email, otp, newPassword) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setIsOtpSent(false); 
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Failed to reset password');
      setSuccessMessage('');
    }
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('User Profile:', response.data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1d1441]">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        <div className="w-1/2 p-8 bg-white">
          <h2 className="mb-6 text-2xl font-bold text-center">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
          {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}

          <form className="space-y-4" onSubmit={isLogin ? handleLogin : isOtpSent ? verifyRegistrationOtp : handleRegistration}>
            {!isLogin && !isOtpSent && (
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {!isOtpSent && (
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {isOtpSent && (
              <div>
                <label htmlFor="otp" className="block mb-1 text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-[#8162ff] border-gray-300 rounded focus:ring-[#8162ff]"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <ForgotPasswordModal handleForgotPassword={handleForgotPassword} />
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#8162ff] rounded-lg hover:bg-[#684bd9] focus:outline-none focus:ring-2 focus:ring-[#8162ff] focus:ring-opacity-50"
            >
              {isLogin ? "SIGN IN" : isOtpSent ? "VERIFY OTP" : "SIGN UP"}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center w-1/2 p-8 text-white bg-[#8162ff]">
          <h2 className="mb-6 text-3xl font-bold">
            {isLogin ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="mb-8 text-center">
            {isLogin
              ? "Register with your personal details to use all of site features"
              : "To keep connected with us please login with your personal info"}
          </p>
          <button
            onClick={toggleForm}
            className="px-8 py-2 font-bold text-[#8162ff] bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            {isLogin ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;