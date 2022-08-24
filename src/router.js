const express = require('express')

const router = express.Router()

const getBooks = require("./controllers/getBooks")
const createBook = require("./controllers/createBook")
const getauthor = require("./controllers/getauthor");

router.get('/books', getBooks)
router.post('/books', createBook)
router.get('/authors', getauthor )
module.exports = router;
