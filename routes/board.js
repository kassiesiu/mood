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

// READ ONE BY NAME
router.get('/:boardName', (req, res, next) => {
    Board.find({boardName: req.params.boardName}, (err, result) => {
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

router.get('/:id', (req, res, next) => {
    Board.findById(req.params.id, (err, result) => {
        if (err) res.send("None");
        res.json(result);
    });
})


// DELETE
router.delete('/:id', (req, res) => {
    Board.findByIdAndRemove(req.params.id)
        .then((result) => {
            console.log("Successfully deleted board.");
        })
        .catch((err) => {
            console.log("Failed to delete board.")
        });
});