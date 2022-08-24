const express = require('express')

const router = express.Router()

const getBooks = require("./controllers/getBooks")


router.get('/books', getBooks)


module.exports = router;
