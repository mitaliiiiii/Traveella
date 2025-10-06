import React, { useState } from 'react';
import loginBg from '../images/loginBg.jpeg'; // agar local image use karna ho

export default function TravelLogin() {
  const [activeTab, setActiveTab] = useState('user');
  const [username, setUsername] = useState(''); // fixed: username state
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ activeTab, username, password, remember });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1470&q=80')`,
        }}
      ></div>

      {/* Centered Login Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md z-10">
        {/* Logo */}
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
            onClick={() => setActiveTab('user')}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'user'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'admin'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
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
            Need help? Visit our{' '}
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
