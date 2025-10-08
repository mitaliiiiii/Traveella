import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../images/signupImg.jpg'; 
import googleImg from '../images/googleImg.jpeg'; 
import signupLogo from '../images/traveellaSignup.png';

const SignUp = () => {
  const [userType, setUserType] = useState('User');
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >

      {/* Left side with image */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <img
          src={signupImg}
          alt="Travel"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right panel */}
      <div
        style={{
          flexBasis: 400,
          maxWidth: 400,
          padding: '40px 30px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >

        {/* Logo image */}
        <div
          style={{
            height: 180,
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 20,
          }}
        >
          <img 
            src={signupLogo} 
            alt="Traveella Logo" 
            style={{ width: 280, height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Heading */}
        <h1 style={{ margin: '0 0 6px 0', fontWeight: 700, fontSize: 28 }}>
          Travel with us
        </h1>
        <p style={{ margin: '0 0 20px 0', color: '#555', fontWeight: 500, fontSize: 16 }}>
          Join us today
        </p>

        {/* User/Admin Toggle */}
        <div
          style={{
            display: 'flex',
            marginBottom: 24,
            borderRadius: 4,
            boxShadow: '0 0 0 1px #ccc',
          }}
        >
          <button
            onClick={() => setUserType('User')}
            style={{
              flex: 1,
              padding: '10px 0',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 14,
              backgroundColor: userType === 'User' ? '#000' : '#f1f1f1',
              color: userType === 'User' ? '#fff' : '#000',
            }}
          >
            User
          </button>
          <button
            onClick={() => setUserType('Admin')}
            style={{
              flex: 1,
              padding: '10px 0',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 14,
              backgroundColor: userType === 'Admin' ? '#000' : '#f1f1f1',
              color: userType === 'Admin' ? '#fff' : '#000',
            }}
          >
            Admin
          </button>
        </div>

        {/* Sign up with Google */}
        <button
          onClick={() => window.location.href = "http://localhost:4000/api/users/auth/google"}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: 20,
            backgroundColor: '#fff',
            padding: '10px 0',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          <img
            src={googleImg}
            alt="Google logo"
            style={{ width: 18, height: 18, marginRight: 8 }}
          />
          Sign up with Google
        </button>


        <div style={{ textAlign: 'center', color: '#888', marginBottom: 20, fontWeight: 600 }}>
          OR
        </div>

        {/* Sign up with phone or email */}
        <button
          style={{
            backgroundColor: '#000',
            border: 'none',
            borderRadius: 20,
            color: '#fff',
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 20,
          }}
        >
          Sign up with phone or email
        </button>

        {/* Terms and privacy */}
        <p style={{ fontSize: 12, color: '#777', lineHeight: 1.4, marginBottom: 30 }}>
          By signing up, you agree to the{' '}
          <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</a> and{' '}
          <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</a>, including{' '}
          <a href="#" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Cookie Use</a>.
        </p>

        {/* Already have account */}
        <p style={{ fontSize: 14, color: '#555' }}>
          Already have an account?
          <br />
          <button
            onClick={() => navigate('/login')}
            style={{
              marginTop: 8,
              width: '100%',
              borderRadius: 20,
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              fontWeight: 600,
              padding: '10px 0',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Log in
          </button>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
