const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    dob: {
        type:String,
        required: true
    },
    address: {
        type:String,
        required:true
    }
});

const StudentsModel = mongoose.model('students',studentSchema);
module.exports= StudentsModel;