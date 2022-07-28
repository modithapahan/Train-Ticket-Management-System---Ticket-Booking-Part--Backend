const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    NIC:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);
