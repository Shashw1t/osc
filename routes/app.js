const express = require('express');
const app = express();
const port = 3000;
const connectToDatabase = require('../db');
const User = require('../models/User');
const TermsAndConditions = require('../models/TermsAndConditions');

app.use(express.json());

// API endpoints
app.post('/signup', async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Check if username or email already exist
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already taken' });
    }

    // Create a new user
    const newUser = new User({ name, username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.get('/terms-and-conditions', async (req, res) => {
  try {
    const termsAndConditions = await TermsAndConditions.findOne({});
    if (!termsAndConditions) {
      return res.status(404).json({ error: 'Terms and conditions not found' });
    }

    res.json(termsAndConditions);
  } catch (error) {
    console.error('Error retrieving terms and conditions:', error);
    res.status(500).json({ error: 'Error retrieving terms and conditions' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectToDatabase();
