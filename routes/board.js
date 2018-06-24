const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Board = require('../models/Board');

// READ ALL
router.get('/', (req, res, next) => {
    Board.find((err, results) => {
        if (err) return next(err);
        res.json(results);
    });
});

module.exports = router;