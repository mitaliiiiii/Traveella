require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./config/database');

const app = express();

// DB connect
connect();

// CORS allow from frontend
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Parse JSON requests
app.use(express.json());

// Routes
const userRoutes = require('./routes/User');
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => res.send('Traveella backend running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
