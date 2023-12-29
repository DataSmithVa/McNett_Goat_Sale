require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.mongoURI;

// Set `strictQuery` to `false` to prepare for the change
// mongoose.set('strictQuery', false);

// Set `strictQuery` to `true` to suppress the warning message
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {});
    console.log('Database connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
