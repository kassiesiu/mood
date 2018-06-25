const mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    boardName: String
},
{   
    versionKey: false
});

const Board = module.exports = mongoose.model('Board', BoardSchema);