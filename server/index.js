const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 3002;

app.listen(port, () => {
  console.log('listening to port', port);
});