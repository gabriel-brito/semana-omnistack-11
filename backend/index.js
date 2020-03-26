const express = require('express');

const app = express();

app.get('/', (request, response) => 
  response.json(
    {
      evento: 'Semana Omnistack 11',
      aluno: 'Gabriel Santos'
    }
  )
);

app.listen('3333');