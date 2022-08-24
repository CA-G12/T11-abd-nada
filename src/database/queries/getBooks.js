const connection = require('../config/connection')

const getBooksQuery = () => {
    return connection.query('select book.*, author.name as author from book inner join author on author.id = book.author_id')
};

module.exports = getBooksQuery
