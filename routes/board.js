const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Board = require('../models/Board');

// READ ALL
router.get('/', (req, res, next) => {
    Board.find({}, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;

// CREATE
router.post('/', (req, res) => {
    let newBoard = new Board({
        boardName: req.body.boardName
    });

    newBoard.save().then(item => {
        console.log("Saved");
    }).catch(err => {
        console.log("Failed to save to database");
    });
    
});