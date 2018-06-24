// REQUIRES
const express = require('express');
const mongoose = require('mongoose');



// configure app
const app = express();
app.set('port', process.env.PORT || 5000);
// routing for api
app.use('/api/boards', require('./routes/board'));



// set up database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
    app.listen(app.get('port'), () => {
        console.log("Server started on port " + app.get('port'));
    });
});