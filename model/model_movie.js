var mongoose = require('mongoose');
var schema = mongoose.Schema;

var movieSchema = schema({

    Title: String,
    Year: String,
    Description: String,
    Phrase: String,
    Category: String,
    Imagen: String

});

module.exports = mongoose.model('Movie', movieSchema)