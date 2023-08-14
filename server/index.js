const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors());

const HtmlData = require('./quizedata/htmldata');
const CssData = require('./quizedata/cssdata');

const dotenv = require("dotenv");
dotenv.config();



  app.get('/api/htmlquiz/', (req, res) => {
    res.json(HtmlData);
  });
  app.get('/api/cssquiz/', (req, res) => {
    res.json(CssData);
  });
  app.get('/', (req, res) => {
    res.send("how arey ou");
  });

app.listen(process.env.PORT || 5000)