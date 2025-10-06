const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    accountType: { type: String, enum: ["User", "Admin"], default: "User" }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
