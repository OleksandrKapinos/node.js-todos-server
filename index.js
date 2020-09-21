const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config');
const bodyParser = require('body-parser');
const api = require('./routes/index');

const port = 3000;
const app = express();
const db = mongoose.connection;

mongoose.connect(dbConfig.getUrl(),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api);

app.listen(port);

module.exports.app = app;
