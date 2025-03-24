const express = require('express');
const app = express();

app.get('/users/:userId', (req, res) => {
  res.end(`<h1> ${req.path} <br> ${req.params.userId} </h1>`)
});

app.get('/products/:id', (req, res) => {
  const requestStr = `method: ${req.method},<br>
   url: ${req.url}, <br>
   path: ${req.path},<br>
   query: ${JSON.stringify(req.query)}, <br>   
   params: ${JSON.stringify(req.params)},<br>
   key: ${req.params.id},<br>   
   hostname: ${req.hostname},<br>
   ip: ${req.ip}`;

  res.end(`<h1>${requestStr}</h1>`);
});

module.exports = app;
