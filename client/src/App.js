import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop"

// pages
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AfterLoggedInPage from "./pages/AfterLoggedInPage";
import SignupWithPhoneOrEmail from "./pages/SignupWithPhoneOrEmail";
import LandingPageOnScroll from "./pages/LandingPageOnScroll";
import UserProfile from "./pages/UserProfile";
import Blogs from "./pages/BlogsPage";
import BlogsFull from "./pages/BlogsFull";
import AboutUs from "./pages/AboutUs";
import PaymentPage from "./pages/PaymentPage";
import ExplorePage from "./pages/ExplorePage";
import ExploreDetails from "./pages/ExploreDetails";
import Card from "./pages/Card";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center font-inter">

     <ScrollToTop />
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />

        {/* Signup */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* After logged-in page */}
        <Route path="/afterloggedinpage" element={<AfterLoggedInPage />} />

        {/* Signup with phone or email */}
        <Route
          path="/signupwithphoneoremail"
          element={<SignupWithPhoneOrEmail />}
        />

        {/* LandingPage On Scroll */}
        <Route path="/LandingPageOnScroll" element={<LandingPageOnScroll />} />

        {/* User Profile */}
        <Route path="/userprofile" element={<UserProfile />} />

        {/* Blogs Page (List of articles) */}
        <Route path="/blogs" element={<Blogs />} />

        {/* ✅ Single Blog Full View (Dynamic route with article ID) */}
        <Route path="/blogsfull/:id" element={<BlogsFull />} />

        {/* About Us Page */}
        <Route path="/aboutus" element={<AboutUs />} />
        
        {/* Payment Page */}
        <Route path="/payment" element={<PaymentPage />} /> 
        {/* Explore  Page */}
        <Route path="/explorepage" element={<ExplorePage />} />

        {/* Explore Detaoils Page */  }
        <Route path="/exploredetails" element={<ExploreDetails />} />
 <Route path="/card" element={<Card />} />

        
        
      </Routes>
    </div>
  );
}

export default App;
