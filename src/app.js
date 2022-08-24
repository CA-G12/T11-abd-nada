const { join } = require("path")
const express = require('express');

const router = require("./router")

const app = express()

app.use(express.json())
app.use(express.static(join(__dirname, '..', 'public')));
app.use("/api/v1", router)

app.set('port', process.env.PORT || 5000);

module.exports = app
