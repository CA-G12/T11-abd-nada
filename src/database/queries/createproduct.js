const connection = require("../config/connection")
const added = ({ bookName, bookdescription })=>{
    const sql = {
        text: `insert into book(name, description) values($1, $2) returning *;`,
      values: [bookName, bookdescription],
      };
    
      
      return connection.query(sql)       

    };
    module.exports=added;