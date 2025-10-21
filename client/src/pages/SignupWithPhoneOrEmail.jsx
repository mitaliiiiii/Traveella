// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import signupImg from '../images/signupImg.jpg'; 
// import googleImg from '../images/googleImg.png'; 
// import signupLogo from '../images/traveellaSignup.png';
// import axios from "axios";

// const SignupWithPhoneOrEmail = () => {
//   const [userType, setUserType] = useState('User');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Signup submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       setMessage("All fields are required");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:4000/api/users/signup", {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         userType, // agar backend me ye field handle ho rahi ho
//       });

//       setMessage(res.data.message);

//       // redirect after 0.5 sec
//       setTimeout(() => navigate('/afterloggedinpage'), 500);

//     } catch (err) {
//       console.error(err.response?.data);
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
//       {/* Left Image */}
//       <div style={{ flex: 1, overflow: 'hidden' }}>
//         <img src={signupImg} alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//       </div>

//       {/* Right Form Section */}
//       <div style={{ flexBasis: 420, maxWidth: 420, padding: '40px 35px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

//         {/* Logo */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
//           <img src={signupLogo} alt="Traveella Logo" style={{ width: 180, height: 'auto', objectFit: 'contain' }} />
//         </div>

//         <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 6 }}>Travel with us</h1>
//         <p style={{ color: '#555', fontWeight: 500, fontSize: 16, marginBottom: 25 }}>Join us today</p>

//         {/* User/Admin Toggle */}
//         <div style={{ display: 'flex', marginBottom: 24, borderRadius: 4, boxShadow: '0 0 0 1px #ccc' }}>
//           <button
//             onClick={() => setUserType('User')}
//             style={{ flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer', fontWeight: 600, backgroundColor: userType === 'User' ? '#000' : '#f1f1f1', color: userType === 'User' ? '#fff' : '#000' }}
//           >
//             User
//           </button>
//           <button
//             onClick={() => setUserType('Admin')}
//             style={{ flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer', fontWeight: 600, backgroundColor: userType === 'Admin' ? '#000' : '#f1f1f1', color: userType === 'Admin' ? '#fff' : '#000' }}
//           >
//             Admin
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email or phone number"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
//             required
//           />

//           <div style={{ position: 'relative' }}>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
//               required
//             />
//             <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#888', fontSize: 13 }}>
//               {showPassword ? 'Hide' : 'Show'}
//             </span>
//           </div>

//           <div style={{ position: 'relative' }}>
//             <input
//               type={showConfirmPassword ? 'text' : 'password'}
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
//               required
//             />
//             <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#888', fontSize: 13 }}>
//               {showConfirmPassword ? 'Hide' : 'Show'}
//             </span>
//           </div>

//           <button type="submit" style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, cursor: 'pointer', fontSize: 16 }}>
//             Sign Up
//           </button>
//         </form>

//         {/* Message */}
//         {message && <p style={{ marginTop: 15, color: 'blue', fontSize: 14, textAlign: 'center' }}>{message}</p>}

//         {/* Google Signup */}
//         <button onClick={() => window.location.href = "http://localhost:4000/api/users/auth/google"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ddd', borderRadius: 8, backgroundColor: '#fff', padding: '10px 0', cursor: 'pointer', fontWeight: 600, fontSize: 14, marginTop: 20 }}>
//           <img src={googleImg} alt="Google" style={{ width: 18, height: 18, marginRight: 8 }} />
//           Sign up with Google
//         </button>

//       </div>
//     </div>
//   );
// };

// export default SignupWithPhoneOrEmail;


// import React from "react";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import signupImg from '../images/signupImg.jpg'; 
// import googleImg from '../images/googleImg.png'; 
// import signupLogo from '../images/traveellaSignup.png';


// export default function SignUp(){
//     const [userType, setUserType] = useState('User');
//   const navigate = useNavigate();
//    const [activeTab, setActiveTab] = useState("user");
//   return (
// <div
//   className="relative h-screen w-screen flex items-center justify-center bg-cover bg-[40%_33%] bg-no-repeat"
//   style={{ backgroundImage: `url(${signupImg})` }}
// >
//       <div
//         className="
//           relative z-10 
//           w-full max-w-md sm:max-w-lg lg:max-w-xl 
//           bg-white/80 backdrop-blur-xl border border-white/30 
//           rounded-2xl shadow-xl 
//           p-6 sm:p-10 
//           flex flex-col items-center
//           h-[700px]
//         "
//       >
//          {/* logo */}
//                 <div className="flex justify-center mb-2 sm:mb-4">
//                   <img
//                     src={signupLogo}
//                     alt="Travel"
//                     className="h-24 sm:h-32 md:h-40 object-contain"
//                   />
//                 </div>
        
//          <h1 className="text-gray-800 text-4xl sm:text-4xl  mb-4 font-bold">
//           Travel With Us
//         </h1>
//           <h1 className="text-gray-600 text-3xl sm:text-4xl  mb-4 font-semibold">
//           Join Us today
//         </h1>
//         <div className="flex justify-center w-full mb-4 sm:mb-6">
//           <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-xs">
//             <button
//               onClick={() => setActiveTab("user")}
//               className={`flex-1 px-3 sm:px-4 py-2 rounded-l-full text-sm sm:text-base font-medium transition-colors ${
//                 activeTab === "user"
//                   ? "bg-black text-white shadow-sm"
//                   : "text-black hover:text-gray-700"
//               }`}
//             >
//               User
//             </button>
//             <button
//               onClick={() => setActiveTab("admin")}
//               className={`flex-1 px-3 sm:px-4 py-2 rounded-r-full text-sm sm:text-base font-medium transition-colors ${
//                 activeTab === "admin"
//                   ? "bg-black text-white shadow-sm"
//                   : "text-black hover:text-gray-700"
//               }`}
//             >
//               Admin
//             </button>
            
//           </div>

       
//         </div>
    
//            <button
//   onClick={() =>
//     (window.location.href = "http://localhost:4000/api/users/auth/google")
//   }
//   className=" flex justify-center items-center border border-gray-300 rounded-full bg-white cursor-pointer font-semibold text-[17px] mb-5 hover:bg-gray-50 transition w-[340px] h-[60px]"
// >
//   <img
//     src={googleImg}
//     alt="Google logo"
//     className="w-[20px] h-[20px] mr-[70px]"
//   />
//   Sign up with Google
// </button>

// <div>
//   OR
// </div>
//    <button
 
//  onClick={() => navigate('/signupwithphoneoremail')
//   }
//   className=" flex justify-center items-center border border-gray-300 rounded-full bg-black cursor-pointer font-semibold text-[17px] mb-5 hover:bg-gray-800 transition w-[340px] h-[60px] text-white"
// >
//   Sign up with phone or email
// </button>


//          <p style={{ fontSize: 12, color: '#777', lineHeight: 1.4, marginBottom: 30 }}>
//           By signing up, you agree to the{' '}
//           <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</a> and{' '}
//          <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</a>, including{' '}
//          <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Cookie Use</a>.
//         </p>
//      <p className="font-semibold ">
//       Already have an account?
// </p>
//           <button
 
//  onClick={() => navigate('/login')
//   }
//   className=" flex justify-center items-center border mt-[20px] border-gray-300 rounded-full bg-white cursor-pointer font-semibold text-[14px] mb-5 transition w-[340px] h-[40px] text-black"
// >
//  login in
// </button>

//     </div>


  
      


// </div>



//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../images/signupImg.jpg";
import googleImg from "../images/googleImg.png";
import signupLogo from "../images/traveellaSignup.png";
import axios from "axios";

export default function SignUp() {
  const [userType, setUserType] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType,
      });

      setMessage(res.data.message);
      setTimeout(() => navigate("/afterloggedinpage"), 500);
    } catch (err) {
      console.error(err.response?.data);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-[40%_33%] bg-no-repeat"
      style={{ backgroundImage: `url(${signupImg})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-[90%] max-w-lg bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center max-h-[95vh] overflow-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={signupLogo}
            alt="Travel"
            className="h-28 sm:h-32 object-contain"
          />
        </div>

        {/* Headings */}
        <h1 className="text-gray-900 text-3xl font-extrabold mb-1">
          Travel With Us
        </h1>
        <p className="text-gray-600 text-lg font-medium mb-6">Join us today</p>

        {/* User/Admin Tabs */}
        <div className="flex justify-center w-full mb-6">
          <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-xs shadow-inner">
            <button
              onClick={() => setUserType("user")}
              className={`flex-1 px-4 py-2 rounded-l-full text-sm font-semibold transition-all ${
                userType === "user"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setUserType("admin")}
              className={`flex-1 px-4 py-2 rounded-r-full text-sm font-semibold transition-all ${
                userType === "admin"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <span
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs cursor-pointer"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 font-semibold text-base hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-blue-600 text-sm text-center">{message}</p>
        )}
          <button
                onClick={() =>
                  (window.location.href =
                    "http://localhost:4000/api/users/auth/google")
                }
                className=" mt-[20px] flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[17px] mb-5 hover:bg-gray-50 transition w-[340px] h-[80px] shadow-sm"
              >
                <img
                  src={googleImg}
                  alt="Google logo"
                  className="w-6 h-6 mr-3"
                />
                Sign up with Google
              </button>
      </div>
     
    </div>
  );
}
