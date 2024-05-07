const mongoose = require('mongoose');

// Added MongoDB Atlas connection string with URL encoded password
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@deskspacecluster.1ynlold.mongodb.net/`);

module.exports = mongoose.connection;
