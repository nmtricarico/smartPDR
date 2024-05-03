const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'yourDatabaseName'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = connection;
