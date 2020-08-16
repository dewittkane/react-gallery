const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    const sqlQuery = `UPDATE gallery SET likes=likes+1 WHERE id=$1`
    pool.query(sqlQuery, [galleryId])
        .then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

router.put('/', (req, res) => {
    const newImage = req.body;
    const sqlQuery = `INSERT INTO gallery (path, description) VALUES ($1, $2)`
    pool.query(sqlQuery, [newImage.url, newImage.description])
        .then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

router.delete('/:id', (req, res) => {
    const galleryId = req.params.id;
    const sqlQuery = `DELETE FROM gallery WHERE id=$1;`;
    pool.query(sqlQuery, [galleryId])
        .then(result => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        })
})

// GET Route
router.get('/', (req, res) => {

    const sqlQuery = `SELECT * FROM gallery ORDER BY id DESC;`;
    pool.query(sqlQuery)
        .then(result => {
            console.log('Back from database with', result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;