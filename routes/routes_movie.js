'use strict'

var express = require('express');
var controllerMovie = require('../controller/controller_movie');

var router = express.Router();

router.post('/saveMovie', controllerMovie.saveMovie);
router.get('/GetMovies', () => {
    controllerMovie.getMovies()
        .then((res) => { return res })
        .catch((err) => {
            return err;
        });
})



module.exports = router;