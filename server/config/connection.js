const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ccarroll:182TIAxgoSFvjwaZ@deskspace.5skiygl.mongodb.net/');
module.exports = mongoose.connection;