import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import Signup from "./pages/Signup";
//import Login from "./pages/TravelLogin";
import TravelSignUpPage from "./pages/TravelSignUpPage";
import TravelLogin from "./pages/TravelLogin";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center font-inter">
      <Routes>

        {/* Signup */}
        <Route path="/" element={<TravelSignUpPage />} />
        <Route path="/signup" element={<TravelSignUpPage />} />

        {/* Login */}
         <Route path="/login" element={<TravelLogin />} />



         
      </Routes>
    </div>
  );
}

export default App;
