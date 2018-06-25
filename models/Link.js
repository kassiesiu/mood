const mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
    link: String,
    desc: String,
    boardName: String
},
{   
    versionKey: false
});

const Link = module.exports = mongoose.model('link', LinkSchema);