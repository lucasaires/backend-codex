const mongoose = require('mongoose');

const ItensSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true,
    },

    category: {
        type: String,
        require: true,
        lowercase: true,
    },

    amount: {
        type:Number, 
        default:0
    }, 
    value: {
        type: Number, 
        default:0
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Itens', ItensSchema);