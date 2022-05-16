const mysql = require("mysql");

// create here mysql connection
//mysql://b021387c5e5af6:a85c63c1@us-cdbr-east-05.cleardb.net/heroku_44a14e02619144e?reconnect=true

// HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: '',
//     DB: 'ecommerce_store',

module.exports = {
  HOST: "us-cdbr-east-05.cleardb.net",
  USER: "b021387c5e5af6",
  PASSWORD: "a85c63c1",
  DB: "heroku_44a14e02619144e",
};

// dbConn.connect(function(error){
//     if(error) throw error;
//     console.log('Database Connected Successfully!!!');
// })

// module.exports = dbConn;
