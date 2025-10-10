const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/Auth");
const passport = require("passport");


// Signup route
router.post("/signup", signup);



// Google login start
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google login callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // login success → redirect to frontend
    res.redirect(`${process.env.FRONTEND_URL}/afterloggedinpage`); 
  }
);

module.exports = router;
