const mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    boardName: String
});

const Board = module.exports = mongoose.model('Board', BoardSchema);