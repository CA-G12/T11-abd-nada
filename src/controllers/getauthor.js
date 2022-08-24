const getAuthor = require("../database/queries/getauthor")

const getauthor = (req, res) => {
    getAuthor ().then(data => {
        res.json(data.rows)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    })
}

module.exports = getAuthor ;
