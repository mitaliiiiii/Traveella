import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AfterLoggedInPage from "./pages/AfterLoggedInPage";
import LandingPageOnScroll from "./pages/LandinPageOnScroll";



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (

    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center font-inter">
 
      <Routes>


        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />


        {/* Signup */}
        <Route path="/signup" element={<SignUp />} />


        {/* Login */}
        <Route path="/login" element={<Login />} />

         
        {/* after logged in page */}
        <Route path="/afterloggedinpage" element={<AfterLoggedInPage />} /> 

         <Route path="/LandingPageOnScroll" element={<LandingPageOnScroll />} /> 

      </Routes>
    </div>
  );
}

export default App;
