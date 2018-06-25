// REQUIRES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// configure app
const app = express();
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routing for api
app.use('/api/boards', require('./routes/board'));
app.use('/api/links', require('./routes/link'));



// set up database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mood')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
    app.listen(app.get('port'), () => {
        console.log("Server started on port " + app.get('port'));
    });
});