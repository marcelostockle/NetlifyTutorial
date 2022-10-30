const express = require("express");
const serverless = require("serverless-http")
const path = require('path')
const app = express();
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})
app.get('/file', (req, res) => {
  res.sendFile(path.resolve('./public/api-home.html'))
})

module.exports.handler = serverless(app)