
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./ConnectionDb.js");
const bodyparser = require("body-parser")
const app = express();

const port = process.env.PORT || 5000;
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyparser.json())

const cardRoute = require("./Routes/Card.js")

connection();

app.use('/card' , cardRoute )

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});