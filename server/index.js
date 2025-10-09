require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session'); // <-- add this
require('./config/passport'); // Important: ye line hone chahiye

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Add session middleware BEFORE passport
app.use(
  session({
    secret: 'keyboard cat', // production me strong secret use kar
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session()); // <-- enable passport session support

// Routes
const userRoutes = require('./routes/User');
app.use('/api/users', userRoutes);

// Test
app.get('/', (req, res) => res.send('Traveella backend running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
