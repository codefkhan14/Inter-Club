const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors());

const HtmlData = require('./quizedata/htmldata');
const CssData = require('./quizedata/cssdata');

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;


  app.get('/api/htmlquiz/', (req, res) => {
    res.json(HtmlData);
  });
  app.get('/api/cssquiz/', (req, res) => {
    res.json(CssData);
  });
  app.get('/', (req, res) => {
    res.send("how i am furjan arey ou");
  });

app.listen(port)