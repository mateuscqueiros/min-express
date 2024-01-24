/* Movies routes */

const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Movies');
});

router.get('/all', (_, res) => {
  res.send('All movies');
});

module.exports = router;
