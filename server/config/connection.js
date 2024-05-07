const mongoose = require('mongoose');

// Providing connection strings to the MongoDB Atlas cloud database and the MongoDB Compass local database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/desk-space');

module.exports = mongoose.connection;