const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  console.log(request.body);

  response.json(request.body);
});

routes.get('/aleluia', (request, response) => response.send('Hello World'));

module.exports = routes;