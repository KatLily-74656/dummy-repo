'use strict';

const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.json({"foo": "bar"});
});

app.listen(3000, () => {
    console.log('Server up!');
});