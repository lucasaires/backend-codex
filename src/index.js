const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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


app.listen(process.env.PORT || 3333);
