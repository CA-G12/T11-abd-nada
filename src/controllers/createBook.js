const createBookQuery = require("../database/queries/createproduct")

const createBook = (req, res) => {
    const { name, description, author } = req.body;

    createBookQuery({ name, description, author })
        .then(() => {
            res.redirect("/")
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "server error" });
        })
}

module.exports = createBook;
