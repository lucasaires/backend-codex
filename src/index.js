const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0-rv9si.mongodb.net/market?retryWrites=true&w=majority',{  
     useNewUrlParser: true,
     useUnifiedTopology: true
});



//BD
//empresajrlp@hotmail.com
//empresajr1

// user :admin
// password: admin
app.use(routes);


app.listen(3333);