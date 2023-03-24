const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv').config();

const Port =  process.env.PORT;
const Mongodb_url =  process.env.MONGODB_URI;

const UserRoutes = require('./Routes/Auth');

app.use('/' ,UserRoutes);


mongoose.connect(Mongodb_url);
mongoose.set('strictQuery',false);
mongoose.connection.on('connected' , () => {
    console.log('Connected to Mongo DB');
})

mongoose.connection.on('error' , (err) => {
    console.log('Error while Connecting',err);
})

app.get('/' , (req,res)   => {
    res.send(' Requests Working Properly ...')
})

app.listen(Port,() => {
    console.log('Server is Running on -- ',Port);
})