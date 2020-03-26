const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // always on top.
app.use(routes);


app.listen('3333');
