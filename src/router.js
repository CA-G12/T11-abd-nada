const express = require('express')

const router = express.Router()

const getBooks = require("./controllers/getBooks")
const createBook = require("./controllers/createBook")

router.get('/books', getBooks)
router.post('/books', createBook)

module.exports = router;
