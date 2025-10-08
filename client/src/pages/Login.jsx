// import React, { useState } from "react";
// import loginBg from "../images/loginBg.png"; // Local background image

// export default function TravelLogin() {
//   const [activeTab, setActiveTab] = useState("user");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ activeTab, username, password, remember });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">


//       <img
//         src={loginBg}
//         alt="Login background"
//         className="absolute inset-0 w-full h-full object-cover "
//       />

//       {/* Centered Login Card */}
//       <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md z-10">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
//             TRAVEL
//             <span className="text-yellow-500">🌴</span>
//             LA
//           </h1>
//         </div>

//         {/* User/Admin Tabs */}
//         <div className="flex mb-6 bg-gray-100 rounded-full p-1">
//           <button
//             onClick={() => setActiveTab("user")}
//             className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//               activeTab === "user"
//                 ? "bg-white text-gray-800 shadow-sm"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             User
//           </button>
//           <button
//             onClick={() => setActiveTab("admin")}
//             className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//               activeTab === "admin"
//                 ? "bg-white text-gray-800 shadow-sm"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             Admin
//           </button>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Username Input */}
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={remember}
//                 onChange={(e) => setRemember(e.target.checked)}
//                 className="accent-blue-500"
//               />
//               Remember me
//             </label>
//             <a href="#" className="text-gray-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
//           >
//             Log In
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="text-center mt-6 text-xs text-gray-400">
//           <p>
//             Need help? Visit our{" "}
//             <a href="#" className="text-blue-500 hover:underline">
//               support page
//             </a>
//           </p>
//           <p className="mt-1">© 2023 TRAVELLA. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// // // import React from "react";

// // // import loginBg from "../images/loginBg.png"; 
// // // // import React from "react";
// // // // import loginBg from "../assets/Images/loginBg.jpg"; // ✅ your image file

// // // export default function Login() {
// // //   return (
// // //     <div className="relative h-screen w-full overflow-hidden">
// // //       {/* 🔹 Background image using <img> */}
// // //       <img
// // //         src={loginBg}
// // //         alt="Login background"
// // //         className="absolute inset-0 w-full h-full object-cover opacity-30"
// // //       />

// // //       {/* 🔹 Foreground content */}
// // //       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
// // //         <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
// // //         <p className="text-lg mb-6">Login to continue</p>

// // //         <form className="bg-black/50 p-6 rounded-lg backdrop-blur-md">
// // //           <div className="mb-4">
// // //             <label className="block mb-2 text-sm">Email</label>
// // //             <input
// // //               type="email"
// // //               className="w-64 px-3 py-2 rounded-md text-black"
// // //               placeholder="Enter email"
// // //             />
// // //           </div>

// // //           <div className="mb-4">
// // //             <label className="block mb-2 text-sm">Password</label>
// // //             <input
// // //               type="password"
// // //               className="w-64 px-3 py-2 rounded-md text-black"
// // //               placeholder="Enter password"
// // //             />
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md"
// // //           >
// // //             Login
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }
import React, { useState } from "react";
import loginBg from "../images/loginBg.png"; // Local background image

export default function Login() {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ activeTab, username, password, remember });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Full Background Image - This stays behind everything */}
    
<div className="absolute inset-0 z-0">
  <img 
    src={loginBg} 
    className="object-cover"
    style={{ width: '100vw', height: '100vh' }}
    alt="Login background"
  />
  </div>

  
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md z-20">
     
         <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            TRAVEL
            <span className="text-yellow-500">🌴</span>
            LA
          </h1>
        </div> 
 
        {/* User/Admin Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveTab("user")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "user"
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "admin"
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          <p>
            Need help? Visit our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              support page
            </a>
          </p>
          <p className="mt-1">© 2023 TRAVELLA. All rights reserved.</p>
        </div>
      </div>
    </div>
  
  );
}