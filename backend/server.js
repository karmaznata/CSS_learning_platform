// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// Middleware
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

// User model
const User = mongoose.model('User', {
  username: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  quiz_score: Object,
  date: {
    type: Date,
    default: Date.now
  }
});

// Routes
app.get('/', (req, res) => {
  if (req.session.user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, error: 'Internal server error during signup' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.json({ success: true });
    } else {
      res.json({ success: false, error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error during login' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.cookie('connect.sid', '', { expires: new Date(0) });
  res.json({ success: true });
});

app.get('/quiz/:quizTheme', (req, res) => {
  if (req.session.user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/user', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
