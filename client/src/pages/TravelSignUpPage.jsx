
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import signupImg from '../images/signupImg.jpg';
// import googleImg from '../images/googleImg.jpeg';
// import signupLogo from '../images/traveellaSignup.png';

// const TravelSignUpPage = () => {
//   const [userType, setUserType] = useState('User');
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* Left side image */}
//       <div style={styles.imageContainer}>
//         <img src={signupImg} alt="Travel" style={styles.image} />
//       </div>

//       {/* Right panel */}
//       <div style={styles.formContainer}>
//         {/* Logo */}
//         <div style={styles.logoContainer}>
//           <img
//             src={signupLogo}
//             alt="Traveella Logo"
//             style={styles.logo}
//           />
//         </div>

//         <h1 style={styles.heading}>Travel with us</h1>
//         <p style={styles.subHeading}>Join us today</p>

//         {/* User/Admin Toggle */}
//         <div style={styles.toggleContainer}>
//           <button
//             onClick={() => setUserType('User')}
//             style={{
//               ...styles.toggleButton,
//               backgroundColor: userType === 'User' ? '#000' : '#f1f1f1',
//               color: userType === 'User' ? '#fff' : '#000',
//             }}
//           >
//             User
//           </button>
//           <button
//             onClick={() => setUserType('Admin')}
//             style={{
//               ...styles.toggleButton,
//               backgroundColor: userType === 'Admin' ? '#000' : '#f1f1f1',
//               color: userType === 'Admin' ? '#fff' : '#000',
//             }}
//           >
//             Admin
//           </button>
//         </div>

//         {/* Google Signup */}
//         <button style={styles.googleButton}>
//           <img
//             src={googleImg}
//             alt="Google logo"
//             style={{ width: 18, height: 18, marginRight: 8 }}
//           />
//           Sign up with Google
//         </button>

//         <div style={styles.orText}>OR</div>

//         {/* Email Signup */}
//         <button style={styles.emailButton}>Sign up with phone or email</button>

//         <p style={styles.termsText}>
//           By signing up, you agree to the{' '}
//           <a href="#" style={styles.link}>Terms of Service</a> and{' '}
//           <a href="#" style={styles.link}>Privacy Policy</a>, including{' '}
//           <a href="#" style={styles.link}>Cookie Use</a>.
//         </p>

//         <p style={styles.alreadyText}>
//           Already have an account?
//           <br />
//           <button
//             style={styles.loginButton}
//             onClick={() => navigate('/login')}
//           >
//             Log in
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     height: '100vh',
//     width: '100vw',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   // imageContainer: {
//   //   flex: 1,
//   //   overflow: 'hidden',
//   // },
//   imageContainer: {
//   flex: 1,
//   overflow: 'hidden',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#000', // optional — adds background behind letterboxed image
// },
// imageContainer: {
//   flex: 1,
//   overflow: 'hidden',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#fff',
// },
// image: {
//   width: '100%',
//   height: '90%',
//   objectFit: 'contain',
//   objectPosition: '32% center', 
//   transform: 'scale(1.60)',
// },

//   logoContainer: {
//     height: 180,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 280,
//     height: 'auto',
//     objectFit: 'contain',
//   },
//   heading: { margin: '0 0 6px 0', fontWeight: 700, fontSize: 28 },
//   subHeading: { margin: '0 0 20px 0', color: '#555', fontWeight: 500, fontSize: 16 },
//   toggleContainer: {
//     display: 'flex',
//     marginBottom: 24,
//     borderRadius: 4,
//     boxShadow: '0 0 0 1px #ccc',
//   },
//   toggleButton: {
//     flex: 1,
//     padding: '10px 0',
//     border: 'none',
//     cursor: 'pointer',
//     fontWeight: 600,
//     fontSize: 14,
//   },
//   googleButton: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '1px solid #ddd',
//     borderRadius: 20,
//     backgroundColor: '#fff',
//     padding: '10px 0',
//     cursor: 'pointer',
//     fontWeight: 600,
//     fontSize: 14,
//     marginBottom: 20,
//   },
//   orText: {
//     textAlign: 'center',
//     color: '#888',
//     marginBottom: 20,
//     fontWeight: 600,
//   },
//   emailButton: {
//     backgroundColor: '#000',
//     border: 'none',
//     borderRadius: 20,
//     color: '#fff',
//     padding: '12px 0',
//     fontWeight: 600,
//     fontSize: 16,
//     cursor: 'pointer',
//     marginBottom: 20,
//   },
//   termsText: {
//     fontSize: 12,
//     color: '#777',
//     lineHeight: 1.4,
//     marginBottom: 30,
//   },
//   link: {
//     color: '#000',
//     textDecoration: 'underline',
//     cursor: 'pointer',
//   },
//   alreadyText: { fontSize: 14, color: '#555' },
//   loginButton: {
//     marginTop: 8,
//     width: '100%',
//     borderRadius: 20,
//     border: '1px solid #ddd',
//     backgroundColor: '#fff',
//     fontWeight: 600,
//     padding: '10px 0',
//     cursor: 'pointer',
//     fontSize: 14,
//   },

//   // Responsive styles
//   '@media (max-width: 768px)': {
//     container: {
//       flexDirection: 'column',
//       height: 'auto',
//       width: '100%',
//     },
//     imageContainer: {
//       display: 'none',
//     },
//     formContainer: {
//       width: '100%',
//       maxWidth: '100%',
//       padding: '20px',
//       minHeight: '100vh',
//       justifyContent: 'flex-start',
//     },
//     logoContainer: {
//       height: 120,
//       marginBottom: 10,
//     },
//     logo: {
//       width: 180,
//     },
//     heading: { fontSize: 22 },
//     subHeading: { fontSize: 14 },
//     emailButton: { fontSize: 14, padding: '10px 0' },
//     googleButton: { fontSize: 13, padding: '8px 0' },
//   },
// };

// export default TravelSignUpPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../images/signupImg.jpg';
import googleImg from '../images/googleImg.jpeg';
import signupLogo from '../images/traveellaSignup.png';

const TravelSignUpPage = () => {
  const [userType, setUserType] = useState('User');
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Left side image */}
      <div style={styles.imageContainer}>
        <img src={signupImg} alt="Travel" style={styles.image} />
      </div>

      {/* Right panel */}
      <div style={styles.formContainer}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src={signupLogo} alt="Traveella Logo" style={styles.logo} />
        </div>

        <h1 style={styles.heading}>Travel with us</h1>
        <p style={styles.subHeading}>Join us today</p>

        {/* User/Admin Toggle */}
        <div style={styles.toggleContainer} >
          <button className='rounded-l-full'
            onClick={() => setUserType('User')}
            style={{
              ...styles.toggleButton,
              backgroundColor: userType === 'User' ? '#000' : '#f1f1f1',
              color: userType === 'User' ? '#fff' : '#000',
            
            }}
          >
            User
          </button>
          <button className=' rounded-r-full'
            onClick={() => setUserType('Admin')}
            style={{
              ...styles.toggleButton,
              backgroundColor: userType === 'Admin' ? '#000' : '#f1f1f1',
              color: userType === 'Admin' ? '#fff' : '#000',
            }}
          >
            Admin
          </button>
        </div>

        {/* Google Signup */}
        <button style={styles.googleButton}>
          <img
            src={googleImg}
            alt="Google logo"
            style={{ width: 18, height: 18, marginRight: 8 }}
          />
          Sign up with Google
        </button>

        <div style={styles.orText}>OR</div>

        {/* Email Signup */}
        <button style={styles.emailButton}>Sign up with phone or email</button>

        <p style={styles.termsText}>
          By signing up, you agree to the{' '}
          <a href="#" style={styles.link}>Terms of Service</a> and{' '}
          <a href="#" style={styles.link}>Privacy Policy</a>, including{' '}
          <a href="#" style={styles.link}>Cookie Use</a>.
        </p>

        <p style={styles.alreadyText}>
          Already have an account?
          <br />
          <button
            style={styles.loginButton}
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  // ✅ Left Image Section
  imageContainer: {
    flex: 0.9, // smaller image section so right panel gets more width
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: '31% center',
    transform: 'scale(1.6)',
  },

  // ✅ Right form section (closer & wider)
  formContainer: {
    flexBasis: 480,          // increased width
    maxWidth: 480,
    padding: '40px 40px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '-40px',     // brings right panel closer to image
    boxShadow: '0 0 20px rgba(0,0,0,0.05)', // subtle shadow
    borderRadius: '8px',
    zIndex: 2,
  },

  logoContainer: {
    height: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 280,
    height: 'auto',
    objectFit: 'contain',
  },
  heading: { margin: '0 0 6px 0', fontWeight: 700, fontSize: 28 },
  subHeading: { margin: '0 0 20px 0', color: '#555', fontWeight: 500, fontSize: 16 },
  toggleContainer: {
    display: 'flex',
    marginBottom: 24,
  
   

  },
  toggleButton: {
    flex: 1,
    padding: '10px 0',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: 14,
  },
  googleButton: {
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
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
    fontWeight: 600,
  },
  emailButton: {
    backgroundColor: '#000',
    border: 'none',
    borderRadius: 20,
    color: '#fff',
    padding: '12px 0',
    fontWeight: 600,
    fontSize: 16,
    cursor: 'pointer',
    marginBottom: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#777',
    lineHeight: 1.4,
    marginBottom: 30,
  },
  link: {
    color: '#000',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  alreadyText: { fontSize: 14, color: '#555' },
  loginButton: {
    marginTop: 8,
    width: '100%',
    borderRadius: 20,
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    fontWeight: 600,
    padding: '10px 0',
    cursor: 'pointer',
    fontSize: 14,
  },

  // ✅ Responsive Styles
  '@media (max-width: 900px)': {
    container: {
      flexDirection: 'column',
      height: 'auto',
    },
    imageContainer: {
      width: '100%',
      height: '50vh',
      flex: 'unset',
    },
    image: {
      objectFit: 'cover',
      objectPosition: 'center center',
      height: '100%',
      width: '100%',
    },
    formContainer: {
      width: '100%',
      maxWidth: '100%',
      padding: '25px',
      marginLeft: 0,
      justifyContent: 'flex-start',
      minHeight: 'auto',
      borderRadius: 0,
      boxShadow: 'none',
    },
    logoContainer: {
      height: 140,
      marginBottom: 10,
    },
    logo: {
      width: 200,
    },
    heading: { fontSize: 24 },
    subHeading: { fontSize: 15 },
  },

  '@media (max-width: 480px)': {
    imageContainer: {
      height: '40vh',
    },
    formContainer: {
      padding: '20px',
    },
    heading: { fontSize: 20 },
    subHeading: { fontSize: 13 },
    emailButton: { fontSize: 14, padding: '10px 0' },
    googleButton: { fontSize: 13, padding: '8px 0' },
  },
};

export default TravelSignUpPage;
