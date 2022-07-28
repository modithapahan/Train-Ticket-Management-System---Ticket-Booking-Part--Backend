const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('PriceCalculation',calculationSchema);