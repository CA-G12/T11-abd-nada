const createBookQuery = require("../database/queries/createproduct")

const createBook = (req, res) => {
    console.log(req.body)
    const { bookName, bookdescription } = req.body;

    createBookQuery({ bookName, bookdescription })
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "server error" });
        })
}

module.exports = createBook;
