const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })    
const db = mongoose.connection;

db.on('connected', ()=> {
    console.log("mongo DB connected")
})

db.on('error', ()=> {
    console.log("mongo DB Error")
})

db.on('disconnected', ()=> {
    console.log('mongo DB DisConnected')
})
module.exports = db;