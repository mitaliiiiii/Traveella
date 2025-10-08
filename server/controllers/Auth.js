// server/controllers/Auth.js

exports.login = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy login success" })
}

exports.signup = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy signup success" })
}

exports.sendotp = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy OTP sent" })
}

exports.changePassword = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy password changed" })
}

exports.resetPasswordToken = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy reset token" })
}

exports.resetPassword = (req, res) => {
  res.status(200).json({ success: true, message: "Dummy password reset" })
}

// Agar auth middleware chahiye to:
exports.auth = (req, res, next) => next()
