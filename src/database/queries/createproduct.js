const connection = require("../config/connection")
 const added=({name, description,author})=>{
    const sql = {
        text: `insert into book(name, description, author_id) values($1, $2,$3) returning *;`,
        values: [name, description,author],
      };
    
      
      return connection.query(sql)       

    };
    module.exports=added;