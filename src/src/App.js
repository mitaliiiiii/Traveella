import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center font-inter">
      <Routes>

        {/* Signup */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />

        {/* Login */}
         <Route path="/login" element={<Login />} />



         
      </Routes>
    </div>
  );
}

export default App;
