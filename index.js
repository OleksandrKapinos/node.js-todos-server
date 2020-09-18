const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todosRouter');
const commonRouter = require('./routes/commonRouter');

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
app.use("/todos/:id", function(request, response, next){
    console.log("Only for todos with id");
    next();
});
app.use(todosRouter);
app.use(commonRouter);


app.listen(port);


module.exports.app = app;
