const mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
    link: String,
    title: String,
    desc: String,
    boardName: String,
    meta: mongoose.Schema.Types.Mixed
},
{   
    versionKey: false
});

const Link = module.exports = mongoose.model('link', LinkSchema);