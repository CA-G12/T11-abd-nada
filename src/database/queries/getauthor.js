const connection = require('../config/connection')

const  getauthor = () => {
    return connection.query('select * from author ')
};

module.exports =  getauthor ;