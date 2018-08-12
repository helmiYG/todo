const express = require('express')
const app = express()
const {router} = require('./routes/routesIndex');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tododb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongodb');
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', router)

app.listen(3000, ()=>{
    console.log('listen on port 3000');
    
}) 