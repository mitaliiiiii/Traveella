import React, { useState } from 'react';
import loginBg from '../images/loginBg.jpeg'; // local background image import

export default function TravelLogin() {
  const [activeTab, setActiveTab] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle login logic here
    console.log({ activeTab, email, password, remember });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg max-w-sm w-full p-8">
        {/* Logo */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide flex items-center justify-center gap-2">
            TRAVEL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2L15 8.5L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8.5L12 2z"
              />
            </svg>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-4 space-x-4 text-sm font-semibold">
          {['User', 'Admin'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sign In Title */}
        <h2 className="text-center text-lg font-semibold mb-6">Sign in</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email or username
            </label>
            <input
              type="text"
              id="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email or username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center"
            >
              Password
              <button
                type="button"
                className="text-xs text-gray-500 hover:text-black"
                onClick={() => alert('Password recovery not implemented')}
              >
                Forgot?
              </button>
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="text-gray-500 hover:text-black"
              onClick={() => alert('Need help clicked')}
            >
              Need help?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold disabled:bg-gray-400"
            disabled={!email || !password}
          >
            Sign in
          </button>
        </form>

        <p className="text-xs text-center text-gray-600 mt-6">
          New to Travel?{' '}
          <a href="#" className="underline hover:text-black font-semibold">
            Sign up now
          </a>
          .
        </p>

        <p className="text-xs text-center text-gray-400 mt-2">
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
          <br /> Learn more.
        </p>
      </div>
    </div>
  );
}
