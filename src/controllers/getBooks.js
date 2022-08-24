const getBooksQuery = require("../database/queries/getBooks")

const getBooks = (req, res) => {
    getBooksQuery().then(data => {
        res.json(data.rows)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    })
}

module.exports = getBooks
