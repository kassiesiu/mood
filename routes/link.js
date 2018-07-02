const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../models/Link');
const Board = require('../models/Board');
const isImageUrl = require('is-image-url');

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
});

router.delete('/board/:boardName', (req, res) => {
    Link.deleteMany({ boardName: req.params.boardName }, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

// READ SPECIFIC ITEM
router.get('/:id', (req, res, next) => {
    Link.findById(req.params.id, (err, result) => {
        if (err) res.send("None");
        res.json(result);
    });
})


// DELETE SPECIFIC ITEM
router.delete('/:id', (req, res) => {
    Link.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.json({
                success: true
            });
            console.log("Successfully deleted item.");
        })
        .catch((err) => {
            console.log("Failed to delete item.")
        });
});

// UPDATE
router.put('/:id', (req, res) => {
    Link.findByIdAndUpdate(req.params.id, {title: req.body.title, desc: req.body.desc}, (err, result) => {
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

            // if link is an image
            if (isImageUrl(req.body.link)) {
                metadata.image = req.body.link;
            }


            // check title
            if (!req.body.title) {
                var title = metadata.title;
            } else if (!req.body.title && !metadata.title) {
                var title = "No Title";
            }
            else {
                var title = req.body.title;
            }
            

            // check image
            if (!metadata.image) {
                metadata.image = metadata.logo;
            }

            var newLink = new Link({
                link: req.body.link,
                title: title,
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
                res.json({
                    success: true
                });
                console.log("Saved Link");
            }).catch(err => {
                console.log("Failed to save to database");
            });
        } catch(e) {
            res.send(false);
            console.log("Error saving");
        }
    })()
});

module.exports = router;