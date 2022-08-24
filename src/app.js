const { json } = require('express');
const express = require('express');

const app = express()

app.use(express.json())
app.use(express.static(json(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 5000);