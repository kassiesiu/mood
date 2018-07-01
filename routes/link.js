const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../models/Link');
const Board = require('../models/Board');

const metascraper = require('metascraper')
const got = require('got')

// READ ALL
router.get('/', (req, res, next) => {
    Link.find({}, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

// READ SPECIFIC BOARD
router.get('/board/:boardName', (req, res, next) => {
    Link.find({ boardName: req.params.boardName }, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
})

// READ SPECIFIC ITEM
router.get('/:id', (req, res, next) => {
    Link.findById(req.params.id, (err, result) => {
        if (err) res.send("None");
        res.json(result);
    });
})


// DELETE
router.delete('/:id', (req, res) => {
    Link.findByIdAndRemove(req.params.id)
        .then((result) => {
            console.log("Successfully deleted item.");
        })
        .catch((err) => {
            console.log("Failed to delete item.")
        });
});

// UPDATE
router.put('/:id', (req, res) => {
    Link.findByIdAndUpdate(req.params.id, {desc: req.body.desc}, (err, result) => {
        if (err) return err;
    })
})

// CREATE
router.post('/', (req, res) => {
    // async to get meta data
    ;(async () => {
        try{
            const {body: html, url} = await got(req.body.link)
            const metadata = await metascraper({html, url})
            var newLink = new Link({
                link: req.body.link,
                desc: req.body.desc,
                boardName: req.body.boardName,
                meta: metadata
            });

            // if this is a new board
            Board.findOne({ boardName: req.body.boardName }, (err, docs) => {
                if (!docs) { 
                    var newBoard = new Board({
                        boardName: req.body.boardName
                    });
                    newBoard.save();
                };
            });

            newLink.save().then(item => {
                console.log("Saved Link");
            }).catch(err => {
                console.log("Failed to save to database");
            });
        } catch(e) {
            res.send(false);
        }
    })()
});

module.exports = router;