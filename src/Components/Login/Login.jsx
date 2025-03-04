import React, { useState } from 'react';
import ForgotPasswordModal from './ForgetPasswordModal';
import axios from 'axios';
import axiosInstance from '../helper/axiosinstace';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/register', { //Backend API URL
        name,
        email,
        password,
        role,
      });

      setSuccessMessage(response.data.message); // e.g., "User registered successfully"
      setErrorMessage('');
      setIsLogin(true); // Switch to login form after successful registration
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Registration failed');
      setSuccessMessage('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
        role,
      });
      // console.log(response);
      

      const { token, user } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage (or cookies)
      localStorage.setItem('user', JSON.stringify(user)); //Store user data to localStorage for get the data in every component
      setErrorMessage('');
      setSuccessMessage('Login successful!');
      // Redirect to a protected route or update UI
      window.location.href = '/dashboard'; // Redirect, you'll replace with your actual routing
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Login failed');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1d1441]">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        {/* Left side - white box */}
        <div className="w-1/2 p-8 bg-white">
          <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? "Sign In" : "Create Account"}</h2>

          {/* Display messages */}
          {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
          {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}

          {/* Social login buttons */}
          <div className="flex justify-center gap-2 mb-4">
            <button className="p-2 border rounded-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.1 5.39z" /></svg>
            </button>
            <button className="p-2 border rounded-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </button>
            <button className="p-2 border rounded-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0-1.105.895-2 2-2s2 .895 2 2c0 1.105-.895 2-2 2s-2-.895-2-2zm5 10.5c0-2.484-2.016-4.5-4.5-4.5h-1c-2.484 0-4.5 2.016-4.5 4.5v.5h10v-.5z" /></svg>
            </button>
            <button className="p-2 border rounded-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
            </button>
          </div>

          <div className="mb-4 text-center text-gray-500">or use your email password</div>

          <form className="space-y-4" onSubmit={isLogin ? handleLogin : handleRegistration}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
                <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">Role</label>
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

            {/* {!isLogin && (
              <div>
                <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">Role</label>
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
              </div> */}
            {/* )} */}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="w-4 h-4 text-[#8162ff] border-gray-300 rounded focus:ring-[#8162ff]" />
                  
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                
                <ForgotPasswordModal />
              </div>
            )}

            <button type="submit" className="w-full px-4 py-2 text-white bg-[#8162ff] rounded-lg hover:bg-[#684bd9] focus:outline-none focus:ring-2 focus:ring-[#8162ff] focus:ring-opacity-50">
              {isLogin ? "SIGN IN" : "SIGN UP"}
            </button>
          </form>
        </div>

        {/* Right side - purple box */}
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

// import React from 'react'

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1d1441]">
//       <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-[#1a1528]/95 backdrop-blur-sm dark:border-gray-700">
//         <form className="space-y-6" action="#">
//           <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
          
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//           </div>
          
//           <div className="flex items-start">
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//               </div>
//               <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//             </div>
//             <a href="#" className="ms-auto text-sm text-[#8162ff] hover:underline dark:text-[#8162ff]">Lost Password?</a>
//           </div>
          
//           <button type="submit" className="w-full text-white bg-[#8162ff] hover:bg-[#684bd9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
          
//           <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Not registered? <a href="/signUp" className="text-[#8162ff] hover:underline dark:text-[#8162ff]">Create account</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login


// import  { useState } from 'react';
// import ForgotPasswordModal from './ForgetPasswordModal';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
  
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1d1441]">
//       <div className="flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
//         {/* Left side - white box */}
//         <div className="w-1/2 p-8 bg-white">
//           <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? "Sign In" : "Create Account"}</h2>
          
//           {/* Social login buttons */}
//           <div className="flex justify-center gap-2 mb-4">
//             <button className="p-2 border rounded-lg">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.1 5.39z" />
//               </svg>
//             </button>
//             <button className="p-2 border rounded-lg">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//               </svg>
//             </button>
//             <button className="p-2 border rounded-lg">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0-1.105.895-2 2-2s2 .895 2 2c0 1.105-.895 2-2 2s-2-.895-2-2zm5 10.5c0-2.484-2.016-4.5-4.5-4.5h-1c-2.484 0-4.5 2.016-4.5 4.5v.5h10v-.5z" />
//               </svg>
//             </button>
//             <button className="p-2 border rounded-lg">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="mb-4 text-center text-gray-500">or use your email password</div>
          
//           <form className="space-y-4">
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
//                 <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]" />
//               </div>
//             )}
            
//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
//               <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]" />
//             </div>
            
//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
//               <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]" />
//             </div>
            
//             {isLogin && (
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input type="checkbox" id="remember" className="w-4 h-4 text-[#8162ff] border-gray-300 rounded focus:ring-[#8162ff]" />
//                   <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
//                 </div>
//                 {/* <a href="#" className="text-sm text-[#8162ff] hover:underline">Forgot Your Password?</a> */}
//                 <ForgotPasswordModal />
//                 {/* <ForgotPasswordModal /> */}
//               </div>
//             )}
            
//             <button type="submit" className="w-full px-4 py-2 text-white bg-[#8162ff] rounded-lg hover:bg-[#684bd9] focus:outline-none focus:ring-2 focus:ring-[#8162ff] focus:ring-opacity-50">
//               {isLogin ? "SIGN IN" : "SIGN UP"}
//             </button>
//           </form>
//         </div>
        
//         {/* Right side - purple box */}
//         <div className="flex flex-col items-center justify-center w-1/2 p-8 text-white bg-[#8162ff]">
//           <h2 className="mb-6 text-3xl font-bold">
//             {isLogin ? "Hello, Friend!" : "Welcome Back!"}
//           </h2>
//           <p className="mb-8 text-center">
//             {isLogin 
//               ? "Register with your personal details to use all of site features" 
//               : "To keep connected with us please login with your personal info"}
//           </p>
//           <button 
//             onClick={toggleForm}
//             className="px-8 py-2 font-bold text-[#8162ff] bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//           >
//             {isLogin ? "SIGN UP" : "SIGN IN"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;