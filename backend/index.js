const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(cors());

//Removing the X-Powered-By header
app.disable("x-powered-by");

// Database connection with mongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// API Creation
app.get("/", (req, res)=>{
    res.send("Express app is running")
})

app.listen(port, (error)=>{
    if (!error){
        console.log("Server running on Port " + port);
    } else {
        console.log("Error: ", error)
    }
})
// Shema creating for user 

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type:String,
        unique: true,
    },
    password:{
        type: String,
    },
    tutorials_score:{
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// Creating Endpoint for user registration

app.post('/signup', async (req, res) => {
    try {
      // Check if the user with the given email already exists
      let check = await Users.findOne({ email: req.body.email.toString() });
  
      if (check) {
        return res.status(400).json({
          success: false,
          errors: "The user with this email already exists",
        });
      }
  
      let tutorialsScore = {};
  
      // Create a new user
      const user = new Users({
        name: req.body.username,
        email: req.body.email, 
        password: req.body.password,
        tutorials_score: tutorialsScore,
      });
  
      // Save the user to the database
      await user.save();
  
      // Create a JWT token for the new user
      const data = {
        user: {
          id: user.id,
        },
      };
  
      const token = jwt.sign(data, 'secret_web_platform');
  
      // Respond with success and the token
      res.json({ success: true, token , username: req.body.username, email: req.body.email});
    } catch (error) {
      // Handle any errors that occurred during the process
      console.error("Error during signup:", error);
      res.status(500).json({
        success: false,
        errors: "Internal server error during signup",
      });
    }
  });

// Creating Endpoint for user login

app.post('/login', async(req, res)=>{

    let user = await Users.findOne({email:req.body.email.toString()});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_web_platform');
            res.json({success:true, token, username: user.name, email: user.email});

        }else{
            res.json({success:false, errors:"The password or email is wrong"});
        }
    }else{
        res.json({success:false, errors:"The password or email is wrong"});
    }
})

