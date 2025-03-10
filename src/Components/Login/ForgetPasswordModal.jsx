import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios'; // Import axios


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ForgotPasswordModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('/api/auth/verify-user', { email });  // Use the correct endpoint
      setOtpSent(true);
      setErrorMessage('');
      console.log(response.data.message);
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Failed to send OTP. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    try {
      const response = await axios.post('/api/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      setResetSuccess(true);
      setErrorMessage('');
      console.log(response.data.message); // Password reset successfully
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Failed to reset password. Please try again.');
    }
  };



  return (
    <div>
      <Button onClick={handleOpen}  >
        <h1 className='text-purple-500'>Forgot Password?</h1>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}

          {!otpSent && !resetSuccess && (
            <div>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='bg-[#8162ff] py-2 px-4 text-white rounded-lg hover:bg-[#6a51cf] focus:outline-none focus:ring-2 focus:ring-[#4e3c96] focus:ring-opacity-50'
                onClick={handleSendOtp}
                disabled={!email}
              >
                Send OTP
              </button>
            </div>
          )}

          {otpSent && !resetSuccess && (
            <div>
              <TextField
                fullWidth
                label="OTP"
                variant="outlined"
                margin="normal"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <TextField
                fullWidth
                label="New Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button
                onClick={handleResetPassword}
                className='bg-[#8162ff] py-2 px-4 text-white rounded-lg hover:bg-[#6a51cf] focus:outline-none focus:ring-2 focus:ring-[#4e3c96] focus:ring-opacity-50'
                disabled={!otp || !newPassword || !confirmNewPassword}>Reset Password</button>
            </div>
          )}

          {resetSuccess && (
            <Typography color="success">Password reset successfully!</Typography>
          )}
          <button onClick={handleClose}><h1 className='text-purple-700 py-2 px-4'>Close</h1></button>
        </Box>
      </Modal>
    </div>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import { useState } from 'react';
// // import { blueGrey } from '@mui/material/colors';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   // blueGrey:300,
//   // border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function ForgotPasswordModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [email, setEmail] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState('');
//   const [resetSuccess, setResetSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSendOtp = async () => {
//     // Implement your OTP sending logic here.  This is a placeholder.
//     // You would typically make an API call to your backend.
//     try {
//       // Simulate sending an OTP (replace with your actual API call)
//       console.log(`Simulating sending OTP to ${email}`);
//       // Assuming the API call is successful:
//       setOtpSent(true);
//       setErrorMessage(''); // Clear any previous error messages
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       setErrorMessage('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleResetPassword = async () => {
//     // Implement your password reset logic here. This is a placeholder.
//     // You would typically make an API call to your backend.

//     if (newPassword !== confirmNewPassword) {
//       setErrorMessage("Passwords don't match.");
//       return;
//     }

//     try {
//       // Simulate password reset (replace with your actual API call)
//       console.log(`Simulating password reset for ${email} with OTP ${otp}`);
//       // Assuming the API call is successful:
//       setResetSuccess(true);
//       setErrorMessage(''); // Clear any previous error messages
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       setErrorMessage('Failed to reset password. Please try again.');
//     }
//   };



//   return (
//     <div>
//       <Button onClick={handleOpen}  >
//         <h1 className='text-purple-500'>Forgot Password?</h1>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//             Reset Password
//           </Typography>
//           {errorMessage && (
//             <Typography color="error">{errorMessage}</Typography>
//           )}

//           {!otpSent && !resetSuccess && (
//             <div>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 // variant="outlined"
//                 margin="normal"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 // variant="contained"
//                 // type='submit'
//                 className='bg-[#8162ff] py-2 px-4 text-white rounded-lg hover:bg-[#6a51cf] focus:outline-none focus:ring-2 focus:ring-[#4e3c96] focus:ring-opacity-50'
//                 // color='deepPurple'
//                 // variant='outlined'
//                 onClick={handleSendOtp}
//                 disabled={!email}
//               >
//                 Send OTP
//               </button>
//             </div>
//           )}

//           {otpSent && !resetSuccess && (
//             <div>
//               <TextField
//                 fullWidth
//                 label="OTP"
//                 variant="outlined"
//                 margin="normal"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <TextField
//                 fullWidth
//                 label="New Password"
//                 type="password"
//                 variant="outlined"
//                 margin="normal"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//               <TextField
//                 fullWidth
//                 label="Confirm New Password"
//                 type="password"
//                 variant="outlined"
//                 margin="normal"
//                 value={confirmNewPassword}
//                 onChange={(e) => setConfirmNewPassword(e.target.value)}
//               />
//               {/* <Button
//                 variant="contained"
//                 color='secondary'
//                 // className='bg-purple-500'
              
//               > */}
//               <button
//                 onClick={handleResetPassword}
//                 className='bg-[#8162ff] py-2 px-4 text-white rounded-lg hover:bg-[#6a51cf] focus:outline-none focus:ring-2 focus:ring-[#4e3c96] focus:ring-opacity-50'
//                 disabled={!otp || !newPassword || !confirmNewPassword}>Reset Password</button>
                
//               {/* </Button> */}
//             </div>
//           )}

//           {resetSuccess && (
//             <Typography color="success">Password reset successfully!</Typography>
//           )}
//           <button onClick={handleClose}><h1 className='text-purple-700 py-2 px-4'>Close</h1></button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }