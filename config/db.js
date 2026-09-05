const { default: mongoose } = require('mongoose');
const monsgoose = require('mongoose');

async function connectDB(url){
    return mongoose.connect(url);
}

module.exports = connectDB;