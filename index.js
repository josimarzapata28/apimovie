//Connection to DB

var mongoose = require('mongoose');
var app = require('./app');
var port = 3600;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/movie', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection succes");

        //service
        app.listen(port, () => {
            console.log('connection on port: 3600');
        })

    })
    .catch((e) => {
        console.log("Error to Connection:" + e);
    })