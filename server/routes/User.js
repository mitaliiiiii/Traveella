const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google login start
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google login callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // login success → redirect to frontend
    res.redirect(`${process.env.FRONTEND_URL}/dashboard`); 
  }
);

module.exports = router;
