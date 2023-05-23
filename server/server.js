const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
//const Pool = require('pg').Pool;

//const dbconfig = require('./config.js').db;
//const pool = new Pool(dbconfig);

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});