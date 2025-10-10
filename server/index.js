require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./config/passport'); // passport strategies

const app = express();

// Import DB connection
const db = require('./config/database');

// Connect to MongoDB
db.connect();

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:3000', // frontend origin
    credentials: true,
  })
);

app.use(express.json());

// Session middleware (before passport)
app.use(
  session({
    secret: 'keyboard cat', // prod me strong secret
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session()); // enable passport session support

// Routes
const userRoutes = require('./routes/User');
app.use('/api/users', userRoutes); // all user routes prefixed with /api/users

// Test route
app.get('/', (req, res) => res.send('Traveella backend running'));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
