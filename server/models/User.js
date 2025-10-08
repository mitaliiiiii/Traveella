// server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  accountType: { type: String, default: "User" },
  approved: { type: Boolean, default: true },
  contactNumber: { type: String, default: "" },
  additionalDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  image: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
