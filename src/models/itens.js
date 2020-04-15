const mongoose = require('mongoose');

const ItensSchema = new mongoose.Schema({
    name: String,
    category: String,
    amount: {type:Number, default:0}, 
    value: {type: Number, default:0},
});

module.exports = mongoose.model('Itens', ItensSchema);