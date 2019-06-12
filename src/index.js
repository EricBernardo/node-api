const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://eric:eric@cluster0-aebn8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', (req, res) => {
    return res.send(`Hellow! ${req.query.name}`);
});

app.listen(3333);