// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const quizzes = require('./all_quiz_tasks');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.json({ success: true, session: req.session.user });
    } else {
      res.json({ success: false, error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error during login' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  // res.cookie('connect.sid', '', { expires: new Date(0) });
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
    const updatedScore = await Score.findOneAndUpdate({ user_id, quiz_theme }, { user_id, quiz_theme, points_scored }, { upsert: true, new: true });
    res.json({ success: true, score: updatedScore });
  } catch (error) {
    console.error('Error during record score:', error);
    res.status(500).json({ success: false, error: 'Internal server error during record score' });
  }
});

app.get('/getScores', async (req, res) => {
  try{
    if (req.session.user) {
      const result = await getUserScores(req.session.user._id);
      res.status(200).json(result);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
  catch(err){ 
    console.log("Error", err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function getQuizzes() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return await mongoose.connection.db.collection('quizzes').find({}).toArray();

  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}
async function getUserScores(userId){
  try{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return await mongoose.connection.db.collection('scores').find({user_id: userId}).toArray();
  }catch(err){
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