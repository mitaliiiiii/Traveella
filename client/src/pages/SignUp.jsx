

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

export default function SignUp() {
  const [activeTab, setActiveTab] = useState("user");
  const navigate = useNavigate();

  return (
    <div
  className="relative h-screen w-screen flex items-center justify-center bg-cover bg-[40%_33%] bg-no-repeat"
  style={{ backgroundImage: `url(${signupImg})` }}
>
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Signup Card */}
  <div
  className="
    relative z-10
    w-[90%] max-w-lg sm:max-w-xl lg:max-w-2xl
    bg-white/80 backdrop-blur-xl border border-white/30
    rounded-2xl shadow-2xl
    p-6 sm:p-8 md:p-10
    flex flex-col items-center
    max-h-[95vh] overflow-auto
  "
>
        {/* Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={signupLogo}
            alt="Travel"
            className="h-28 sm:h-32 object-contain"
          />
        </div>

        {/* Headings */}
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-extrabold mb-1">
          Travel With Us
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl font-medium mb-6">
          Join us today
        </p>

        {/* Tabs */}
        <div className="flex justify-center w-full mb-6">
          <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-xs shadow-inner">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex-1 px-4 py-2 rounded-l-full text-sm sm:text-base font-semibold transition-all ${
                activeTab === "user"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 px-4 py-2 rounded-r-full text-sm sm:text-base font-semibold transition-all ${
                activeTab === "admin"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Google Signup */}
        <button
          onClick={() =>
            (window.location.href =
              "http://localhost:4000/api/users/auth/google")
          }
          className="flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[17px] mb-5 hover:bg-gray-50 transition w-[340px] h-[60px] shadow-sm"
        >
          <img
            src={googleImg}
            alt="Google logo"
            className="w-6 h-6 mr-3"
          />
          Sign up with Google
        </button>

        <div className="text-gray-500 font-medium mb-4">OR</div>

        {/* Email/Phone Signup */}
        <button
          onClick={() => navigate("/signupwithphoneoremail")}
          className="flex justify-center items-center border border-gray-300 rounded-full bg-black font-semibold text-[17px] mb-6 hover:bg-gray-800 transition w-[340px] h-[60px] text-white shadow-md"
        >
          Sign up with phone or email
        </button>

        {/* Terms */}
        <p className="text-gray-600 text-[13px] text-center leading-relaxed mb-8 px-6">
          By signing up, you agree to the{" "}
          <a
            href="#"
            className="text-black underline hover:text-gray-700"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-black underline hover:text-gray-700"
          >
            Privacy Policy
          </a>
          , including{" "}
          <a
            href="#"
            className="text-black underline hover:text-gray-700"
          >
            Cookie Use
          </a>
          .
        </p>

        {/* Already have an account */}
        <div className="text-center">
          <p className="font-semibold mb-3 text-gray-800">
            Already have an account?
          </p>
          <button
            onClick={() => navigate("/login")}
            className="flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[15px] hover:bg-gray-100 transition w-[340px] h-[45px] text-black shadow-sm"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
