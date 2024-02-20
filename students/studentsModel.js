const mongoose = require('mongoose');
var schema = mongoose.schema;

const studentsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

const Students = mongoose.model('Students', studentsSchema);

module.exports=Students;
