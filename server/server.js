const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
//const Pool = require('pg').Pool;

//const dbconfig = require('./config.js').db;
//const pool = new Pool(dbconfig);

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use((req, res, next) => {
  if (req.path.slice(-1) === '/' && req.path.length > 1) {
    const query = req.url.slice(req.path.length)
    const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
    res.redirect(301, safepath + query)
  } else {
    next()
  }
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});