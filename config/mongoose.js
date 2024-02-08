const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://oneayusman:'+encodeURIComponent("Meteor350@5001")+'@cluster0.qlpg62b.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind('Error while connecting to DB'));

db.once('open', function(){
    console.log('Successfully connected to DB')
});

module.exports = db;