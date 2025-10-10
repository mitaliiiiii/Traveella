import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../images/signupImg.jpg'; 
import googleImg from '../images/googleImg.jpeg'; 
import signupLogo from '../images/traveellaSignup.png';
import axios from "axios";

const SignupWithEmail = () => {
  const [userType, setUserType] = useState('User');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
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
        userType, // agar backend me ye field handle ho rahi ho
      });

      setMessage(res.data.message);

      // redirect after 0.5 sec
      setTimeout(() => navigate('/afterloggedinpage'), 500);

    } catch (err) {
      console.error(err.response?.data);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Left Image */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <img src={signupImg} alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Right Form Section */}
      <div style={{ flexBasis: 420, maxWidth: 420, padding: '40px 35px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <img src={signupLogo} alt="Traveella Logo" style={{ width: 180, height: 'auto', objectFit: 'contain' }} />
        </div>

        <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 6 }}>Travel with us</h1>
        <p style={{ color: '#555', fontWeight: 500, fontSize: 16, marginBottom: 25 }}>Join us today</p>

        {/* User/Admin Toggle */}
        <div style={{ display: 'flex', marginBottom: 24, borderRadius: 4, boxShadow: '0 0 0 1px #ccc' }}>
          <button
            onClick={() => setUserType('User')}
            style={{ flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer', fontWeight: 600, backgroundColor: userType === 'User' ? '#000' : '#f1f1f1', color: userType === 'User' ? '#fff' : '#000' }}
          >
            User
          </button>
          <button
            onClick={() => setUserType('Admin')}
            style={{ flex: 1, padding: '10px 0', border: 'none', cursor: 'pointer', fontWeight: 600, backgroundColor: userType === 'Admin' ? '#000' : '#f1f1f1', color: userType === 'Admin' ? '#fff' : '#000' }}
          >
            Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
            required
          />

          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#888', fontSize: 13 }}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px 15px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 }}
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#888', fontSize: 13 }}>
              {showConfirmPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, cursor: 'pointer', fontSize: 16 }}>
            Sign Up
          </button>
        </form>

        {/* Message */}
        {message && <p style={{ marginTop: 15, color: 'blue', fontSize: 14, textAlign: 'center' }}>{message}</p>}

        {/* Google Signup */}
        <button onClick={() => window.location.href = "http://localhost:4000/api/users/auth/google"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ddd', borderRadius: 8, backgroundColor: '#fff', padding: '10px 0', cursor: 'pointer', fontWeight: 600, fontSize: 14, marginTop: 20 }}>
          <img src={googleImg} alt="Google" style={{ width: 18, height: 18, marginRight: 8 }} />
          Sign up with Google
        </button>

      </div>
    </div>
  );
};

export default SignupWithEmail;
