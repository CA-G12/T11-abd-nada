const connection = require('../config/connection')

const getBooksQuery = () => {
    return connection.query('select * from book')
};

module.exports = getBooksQuery
