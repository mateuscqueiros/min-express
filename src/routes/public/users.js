/* Users routes */

const express = require('express');
const users = require('../../models/users');

const router = express.Router();

router.get('/', (_, res) => {
  users.get((err, data) => {
    if (err) {
      res.status(400).json({
        err: err.message
      });
      return;
    }
    res.json(data);
  });
});

router.get('/all', (_, res) => {
  res.send('All users');
});

module.exports = router;
