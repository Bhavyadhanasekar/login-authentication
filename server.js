const express = require('express')
const app = express()
const mongoose = require('mongoose');
var router = require('./route/routes');
mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost:27017/students')
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


app.listen(3549,function chech(error)
{
    if(error)
    console.log("error!!!");
    else
    console.log("startedd....!!!")
});

app.use(express.json());
app.use(router);



