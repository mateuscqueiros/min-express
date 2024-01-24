const sqlite3 = require('sqlite3').verbose();

const DB_SOURCE = './src/db/database.db';

const db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database.');
});

module.exports = db;
