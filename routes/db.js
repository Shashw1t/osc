const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://oscdemo:${process.env.MONGODB_PASSWORD}@oscdemo.riu5siu.mongodb.net/?retryWrites=true&w=majority&appName=OscDemo`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = connectToDatabase;
