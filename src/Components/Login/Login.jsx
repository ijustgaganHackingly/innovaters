// import { useState } from 'react';
// import axiosInstance from '../helper/axiosinstace';
// import { BASE_URL } from '../../../constants';
// import { jwtDecode } from 'jwt-decode';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('user');
//   const [otp, setOtp] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [keepSignedIn, setKeepSignedIn] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
//   const [resetPasswordOtp, setResetPasswordOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setOtp('');
//     setErrorMessage('');
//     setSuccessMessage('');
//     setIsOtpSent(false);
//     setForgotPasswordEmail('');
//     setResetPasswordOtp('');
//     setNewPassword('');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axiosInstance.post(`${BASE_URL}/auth/login`, {
//         email,
//         password,
//         role,
//       });
  
//       const { token } = response.data;
  
//       if (!token) {
//         throw new Error('Token is missing in the response');
//       }
  
//       const decodedToken = jwtDecode(token);
//       const { userId, role: userRole } = decodedToken;
//       // console.log(decodedToken)
  
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('role', userRole);
  
//       setSuccessMessage('Login successful!');
//       window.location.href = '/';
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'Login failed');
//     }
//   };

//   const handleRegistration = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance.post(`${BASE_URL}/auth/register`, {
//         name,
//         email,
//         password,
//         role,
//       });

//       setSuccessMessage(response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'Registration failed');
//     }
//   };

//   const verifyRegistrationOtp = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axiosInstance.post(`${BASE_URL}/auth/verify-register`, {
//         email,
//         otp,
//       });

//       setSuccessMessage(response.data.message);
//       setIsLogin(true);
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'OTP verification failed');
//     }
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axiosInstance.post(`${BASE_URL}/auth/forgot-password`, {
//         email: forgotPasswordEmail,
//       });

//       setSuccessMessage(response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'Failed to send OTP');
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axiosInstance.post(`${BASE_URL}/auth/reset-password`, {
//         email: forgotPasswordEmail,
//         otp: resetPasswordOtp,
//         newPassword,
//       });

//       setSuccessMessage(response.data.message);
//       setShowForgotPassword(false);
//       setIsOtpSent(false);
//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'Failed to reset password');
//     }
//   };

//   const renderForgotPasswordForm = () => {
//     if (!isOtpSent) {
//       return (
//         <form onSubmit={handleForgotPassword} className="space-y-4">
//           <div>
//             <label htmlFor="forgotEmail" className="block mb-1 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="forgotEmail"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
//               value={forgotPasswordEmail}
//               onChange={(e) => setForgotPasswordEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-[#42335d] rounded-lg hover:bg-[#362a4b] focus:outline-none"
//           >
//             Send OTP
//           </button>
//           <button
//             type="button"
//             onClick={() => setShowForgotPassword(false)}
//             className="w-full px-4 py-2 text-[#42335d] bg-white border border-[#42335d] rounded-lg hover:bg-gray-100 focus:outline-none"
//           >
//             Cancel
//           </button>
//         </form>
//       );
//     } else {
//       return (
//         <form onSubmit={handleResetPassword} className="space-y-4">
//           <div>
//             <label htmlFor="resetOtp" className="block mb-1 text-sm font-medium text-gray-700">
//               OTP
//             </label>
//             <input
//               type="text"
//               id="resetOtp"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
//               value={resetPasswordOtp}
//               onChange={(e) => setResetPasswordOtp(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="newPassword" className="block mb-1 text-sm font-medium text-gray-700">
//               New Password
//             </label>
//             <input
//               type="password"
//               id="newPassword"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff]"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-[#42335d] rounded-lg hover:bg-[#362a4b] focus:outline-none"
//           >
//             Reset Password
//           </button>
//         </form>
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#271544]">
//       <div className="w-full max-w-md p-8 bg-gradient-to-b from-[#ffffff18] to-[#ffffff0c]  rounded-lg shadow-lg">
//         <div className="flex justify-center mb-8">
//           <img src="/8.png" alt="Hackingly Innovators" className="h-12" />
//         </div>
        
//         {showForgotPassword ? (
//           <div>
//             <h2 className="mb-6 text-2xl font-bold text-center text-white">Forgot Password</h2>
//             {renderForgotPasswordForm()}
//           </div>
//         ) : (
//           <>
//             <h2 className="mb-2 text-2xl font-bold text-center text-white">
//               {isLogin ? "Log in to your account" : "Create an account"}
//             </h2>
//             <p className="mb-6 text-center text-gray-300">
//               {isLogin ? "Welcome back! Please enter your details." : "Please register with your details."}
//             </p>

//             {errorMessage && <div className="mb-4 text-red-300">{errorMessage}</div>}
//             {successMessage && <div className="mb-4 text-green-300">{successMessage}</div>}

//             <form className="space-y-4" onSubmit={isLogin ? handleLogin : isOtpSent ? verifyRegistrationOtp : handleRegistration}>
//               {!isLogin && !isOtpSent && (
//                 <div>
//                   <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff] bg-[#42335d] border-gray-600 text-white"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     placeholder="Enter your name"
//                   />
//                 </div>
//               )}

//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff] bg-[#42335d] border-gray-600 text-white"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Enter your email"
//                 />
//               </div>

//               {!isOtpSent && (
//                 <div>
//                   <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff] bg-[#42335d] border-gray-600 text-white"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="Enter password"
//                   />
//                 </div>
//               )}

//               {isOtpSent && (
//                 <div>
//                   <label htmlFor="otp" className="block mb-1 text-sm font-medium text-gray-300">
//                     OTP
//                   </label>
//                   <input
//                     type="text"
//                     id="otp"
//                     className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] focus:border-[#8162ff] bg-[#42335d] border-gray-600 text-white"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     required
//                     placeholder="Enter OTP"
//                   />
//                 </div>
//               )}

//               {isLogin && !isOtpSent && (
//                 <div>
//               <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-300">
//                 Role
//               </label>
//               <select
//                 id="role"
//                 className="w-full px-3 py-2 border rounded-lg focus:ring-[#8162ff] text-gray-300 focus:border-[#8162ff] bg-[#42335d]"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//                 <option value="superadmin">Super Admin</option>
//               </select>
//             </div>
//               )}

//               {isLogin && !isOtpSent && (
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="remember"
//                       className="w-4 h-4 border-gray-600 rounded text-[#8162ff] focus:ring-[#8162ff] bg-[#42335d]"
//                       checked={keepSignedIn}
//                       onChange={(e) => setKeepSignedIn(e.target.checked)}
//                     />
//                     <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
//                       Keep me signed in
//                     </label>
//                   </div>
//                   <button
//                     type="button"
//                     className="text-sm text-[#8162ff] hover:underline"
//                     onClick={() => {
//                       setShowForgotPassword(true);
//                       setIsOtpSent(false);
//                     }}
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-black bg-white  rounded-lg hover:bg-opacity-60 focus:outline-none"
//               >
//                 {isLogin ? "Sign in" : isOtpSent ? "Verify OTP" : "Sign up"}
//               </button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-gray-300">
//                 {isLogin ? "Don't have an account?" : "Already have an account?"}
//                 <button
//                   type="button"
//                   onClick={toggleForm}
//                   className="ml-2 text-[#8162ff] hover:underline"
//                 >
//                   {isLogin ? "Sign up" : "Sign in"}
//                 </button>
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


import  { useState } from 'react';
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
      const { userId, role: userRole , name : userName} = decodedToken;
  
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('name' , userName)
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

           { isLogin &&(
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
                <option value="campusleader">CampusLeader</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
           )}

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