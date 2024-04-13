const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://iamsoranic:XHO1IwdGt60r88K9@osccluster.keejf5t.mongodb.net/?retryWrites=true&w=majority&appName=oscCLUSTER`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);

    // Check if it's a connection error
    if (error instanceof mongoose.Error) {
      console.error('Connection error:', error.message);
    }

    // Check if it's a network-related error
    if (error.name === 'MongoNetworkError') {
      console.error('Network error:', error.message);
    }

    // Check if it's an authentication error
    if (error.codeName === 'AtlasError' && error.errorResponse && error.errorResponse.errmsg.includes('bad auth')) {
      console.error('Authentication failed. Please check your credentials.');
    }

    // Re-throw the error to propagate it to the caller
    throw error;
  }
};

module.exports = connectToDatabase;
