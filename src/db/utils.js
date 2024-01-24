const users = require('../models/users');

const setup = (db) => {
  users.create(db);
};

module.exports = {
  setup
};
