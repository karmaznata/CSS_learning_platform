// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const quizzes = require('./quiz_tasks');
const bodyParser = require('body-parser');
const sanitize = require('mongo-sanitize');
const helmet = require('helmet');
const MongoStore = require('connect-mongo');

require('dotenv').config();

// Initialize Express app
const app = express();

// Disable Express version header
app.disable('x-powered-by');

// Use Helmet middleware to enhance security
app.use(helmet());

const port = process.env.PORT || 4000;

// Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS middleware
const allowedOrigins = ["http://localhost:3000", "https://master.d1xjnv8qtw038p.amplifyapp.com"];
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin, like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT"],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT"],
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_CONNECTION_STRING,
    ttl: 14 * 24 * 60 * 60 // 14 days
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none'
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

// Scores model
const Score = mongoose.model('Score', {
  user_id: String,
  quiz_theme: String,
  points_scored: Number
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

    // Sanitize input to prevent injection attacks
    const sanitizedEmail = sanitize(email);

    // Validate input
    if (!sanitizedEmail || !password) {
      return res.json({ success: false, error: 'Email and password are required' });
    }

    // Retrieve user from the database
    const user = await User.findOne({ email: sanitizedEmail });

    // Check if user exists and compare passwords
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        req.session.user = user;
        return res.json({ success: true, session: req.session.user });
      }
    }

    res.json({ success: false, error: 'Invalid email or password' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error during login' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.put('/updateUserData', async (req, res) => {
  try {
    const { newUsername, newEmail } = req.body;
    const userId = req.session.user._id;

    const user = await User.findById(userId);

    // Update username
    if (newUsername) {
      await updateUserUsername(user, newUsername, userId, res);
      req.session.user.username = newUsername;
    }

    // Update email
    if (newEmail) {
      await updateUserEmail(user, newEmail, userId, res);
      req.session.user.email = newEmail;
    }
    res.json({ success: true, user: req.session.user });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error during account update' });
  }
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

app.get('/quizzes', async (req, res) => {
  try {
    if (req.session.user) {
      const result = await getQuizzes();
      res.status(200).json(result);
    } else {
      res.json({ error: 'Unauthorized' });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.post('/recordScore', async (req, res) => {
  try {
    const { user_id, quiz_theme, points_scored } = req.body;

    // Sanitize input to prevent injection attacks
    const sanitizedUserId = sanitize(user_id);
    const sanitizedQuizTheme = sanitize(quiz_theme);
    const sanitizedPointsScored = sanitize(points_scored);

    // Ensure required fields are present
    if (!sanitizedUserId || !sanitizedQuizTheme || !sanitizedPointsScored) {
      return res.status(400).json({ success: false, error: 'User ID, quiz theme, and points scored are required' });
    }

    // Find and update the score
    const filter = { user_id: sanitizedUserId, quiz_theme: sanitizedQuizTheme };
    const update = { user_id: sanitizedUserId, quiz_theme: sanitizedQuizTheme, points_scored: sanitizedPointsScored };
    const options = { upsert: true, new: true };

    const updatedScore = await Score.findOneAndUpdate(filter, update, options);

    res.json({ success: true, score: updatedScore });
  } catch (error) {
    console.error('Error during record score:', error);
    res.status(500).json({ success: false, error: 'Internal server error during record score' });
  }
});

app.get('/getScores', async (req, res) => {
  try {
    if (req.session.user) {
      const result = await getUserScores(req.session.user._id);
      res.status(200).json(result);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
  catch (err) {
    console.log("Error", err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function updateUserUsername(user, newUsername, userId, res) {
  const sanitizedNewUsername = sanitize(newUsername);

  const existingUserWithUsername = await User.findOne({ username: sanitizedNewUsername });
  if (existingUserWithUsername && existingUserWithUsername._id.toString() !== userId) {
    return res.json({ success: false, error: 'username' });
  }
  user.username = sanitizedNewUsername;
  await user.save();
}

async function updateUserEmail(user, newEmail, userId, res) {
  const sanitizedNewEmail = sanitize(newEmail);

  const existingUserWithEmail = await User.findOne({ email: sanitizedNewEmail });
  if (existingUserWithEmail && existingUserWithEmail._id.toString() !== userId) {
    return res.json({ success: false, error: 'email' });
  }

  user.email = sanitizedNewEmail;
  await user.save();
}

async function getQuizzes() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return await mongoose.connection.db.collection('quizzes').find({}).toArray();

  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}
async function getUserScores(userId) {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return await mongoose.connection.db.collection('scores').find({ user_id: userId }).toArray();
  } catch (err) {
    console.log("Error", err);
  }
}
// Function to create the collection for quiz tasks in MongoDB
async function createQuizTasksCollection() {
  const collectionName = 'quizzes';
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

    // Check if the connection to the database is successful
    mongoose.connection.on('connected', async () => {
      // Check if the collection exists

      const collectionExists = await mongoose.connection.db.listCollections({ name: collectionName }).hasNext();

      if (collectionExists) {
        console.log(`Collection '${collectionName}' already exists and will be skipped.`);
        return;
      }
      const collection = mongoose.connection.db.collection(collectionName);
      // Create the collection
      await mongoose.connection.db.createCollection(collectionName);
      try {
        await mongoose.connection.db.createCollection(collectionName);
        console.log('Inserting quizzes');
        const insertionResult = await collection.insertMany(quizzes(), { ordered: false });
        console.log(`Number of documents inserted: ${insertionResult.insertedCount}`);

        console.log(`Collection ${collectionName} created!\n`);
      } catch (error) {
        console.error(`\x1b[31m Error creating collection: ${collectionName}\n\x1b[0m`, error.message);
      }
      // Disconnect from MongoDB
      // mongoose.disconnect();
    });
  } catch (error) {
    console.error(`Error creating collection: ${collectionName}`, error.message);
  }
}

// Call the functions to create collections
createQuizTasksCollection();