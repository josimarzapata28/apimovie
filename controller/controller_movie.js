'use strict'

var ModelMovie = require('../model/model_movie');

var controller = {

    saveMovie: (req, res) => {

        var modelmovie = ModelMovie();
        var params = req.body;

        modelmovie.Title = params.title;
        modelmovie.Year = params.year;
        modelmovie.Description = params.description;
        modelmovie.Phrase = params.phrase;
        modelmovie.Category = params.category;

        modelmovie.save((err, Stored) => {
            if (err) return res.status(500).send({ message: 'Error to save Document' });

            if (!Stored) return res.status(404).send({ message: 'Not save' });

            return res.status(200).send({ message: 'Doc Save Succes' });
        });
    },

    getMovies: () => {
        return new Promise((resolve, reject) => {
            ModelMovie.find((err, res) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err);
                }
            })
        });
    }

}

module.exports = controller;