const mongoose = require('mongoose');

// Added MongoDB Atlas connection string with URL encoded password
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ccarroll:9F.rR%40J%24EUN%21-Ta%2A@deskspacecluster.1ynlold.mongodb.net/');

module.exports = mongoose.connection;
