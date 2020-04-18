const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const config = require('./config/keys');
const app = express();

// Connect to database
mongoose.connect(config.mongodbURI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log(error);
    });

// API routes
require('./routes')(express.Router());

// Body Parser Middleware
app.use(
    bodyParser.urlencoded({extended: false}), 
    bodyParser.json(),
    passport.initialize(),
    passport.session(),
    express.static(path.join(__dirname, '../client/build')),
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
            return res.status(200).json({});
        }
        next();
   });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(config.port, () => {
    console.log(`Server up and running on port ${config.port}!`);
});