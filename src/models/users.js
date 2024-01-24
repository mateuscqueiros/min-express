const md5 = require('md5');
const db = require('../db');

const create = function (db) {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text,
      email text UNIQUE,
      password text,
      CONSTRAINT email_unique UNIQUE (email)
    )`,
    (err) => {
      if (err) {
        console.log(err.message);
      }
      var insert =
        'INSERT OR IGNORE INTO users (name, email, password) VALUES (?, ?, ?)';
      db.run(insert, ['admin', 'admin@example.com', md5('admin123456')]);
      db.run(insert, ['user', 'user@example.com', md5('user123456')]);
    }
  );
};

const get = function (func, query) {
  let sql = query ? query : 'SELECT * FROM users';
  let params = [];

  let result = db.all(sql, params, (err, rows) => {
    if (err) {
      func(err);
    }
    func(undefined, rows);
  });

  return result;
};

module.exports = {
  create,
  get
};
