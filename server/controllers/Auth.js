const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");




{/*   SignUp controller for authenticating users   */}

exports.signup = async (req, res) => {
  try {
     console.log("Signup hit:", req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};






{/*   Login controller for authenticating users   */}

exports.login = async (req, res) => {
  try {

    // Get email and password from request body

    const { email, password } = req.body
    
    console.log(`[LOGIN ATTEMPT] Email: ${email}, Time: ${new Date().toLocaleString()}`);



    // Check if email or password is missing

    if (!email || !password) {

      // Return 400 Bad Request status code with error message

      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }


    // Find user with provided email

    const user = await User.findOne({ email });


    // If user not found with provided email

    if (!user) {

    // Return 401 Unauthorized status code with error message

      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }


    // Generate JWT token and Compare Password

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )


    // Save token to user document in database

      user.token = token
      user.password = undefined

    // Set cookie for token and return success response

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } 
  
  catch (error) {
    console.error(error)

    // Return 500 Internal Server Error status code with error message

    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}