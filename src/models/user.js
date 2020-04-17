const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
  
    email: { 
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    }, 
    password: { 
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    },
});

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});


module.exports =  mongoose.model("User", userSchema);