const express = require('express');
const app = express();

app.get(
  '/',
  (req, res, next) => {
    req.test = 5;
    console.log('first');
    next();
  },
  (req, res, next) => {
    console.log('second');
    req.test *= 4;
    if (true) {
      next();
    }else{
      res.send('stop');
    }
  },
  (req, res, next) => {
    console.log('third');
    res.status(200).send('finish, '+ req.test);
  }
);

module.exports = app;
