const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true,
    },

    size: {
        type:Number
    }, 
    
    key: {
        type: String, 
    },

    url:{
        type: String
    },

    item:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,

    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Image', ImageSchema);