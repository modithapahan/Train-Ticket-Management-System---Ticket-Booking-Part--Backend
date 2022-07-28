const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    no_of_tickets:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('LocationDetail',locationSchema);