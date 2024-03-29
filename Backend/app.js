const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();

const Port =  process.env.PORT;
const Mongodb_url =  process.env.MONGODB_URI;

const UserRoutes = require('./Routes/Auth');
const UserCreateRoutes = require('./Routes/Post');
const UsersRoutes = require('./Routes/Users');

app.use(express.json());
app.use(cors());
app.use('/' ,UserRoutes);
app.use('/' ,UserCreateRoutes);
app.use('/' ,UsersRoutes);


mongoose.connect(Mongodb_url);
mongoose.set('strictQuery',false);
mongoose.connection.on('connected' , () => {
    console.log('Connected to Mongo DB');
})

mongoose.connection.on('error' , (err) => {
    console.log('Error while Connecting',err);
})

app.get('/' , (req,res)   => {
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.send(' Requests Working Properly ...')
})

app.listen(Port,() => {
    console.log('Server is Running on -- ',Port);
})