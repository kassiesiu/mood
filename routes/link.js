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
    // res.send(req.params.boardName);
    Link.find({ boardName: req.params.boardName }, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
})

router.get('/test', (req, res, next) => {


    const targetUrl = 'https://www.youtube.com/watch?v=kEKZD4KO-9o'

    res.send(targetUrl);
    ;(async () => {
    const {body: html, url} = await got(targetUrl)
    const metadata = await metascraper({html, url})
    console.log(metadata)
    })()

})

// CREATE
router.post('/', (req, res) => {
    ;(async () => {
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
            res.send("");
        }).catch(err => {
            console.log("Failed to save to database");
        });
    })()

    // var newLink = new Link({
    //     link: req.body.link,
    //     desc: req.body.desc,
    //     boardName: req.body.boardName,
    //     meta: metadata
    // });

    // console.log(newLink);
    

    
});

module.exports = router;