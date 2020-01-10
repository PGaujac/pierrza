const express = require('express');
const router = express.Router();
const menu = require('../data/menu.json');
const toppings = require('../data/toppings.json');

/* GET home page. */
router.get('/menu', (req, res, next) => {
  res.send(menu);
});

router.get('/toppings', (req, res, next) => {
  res.send(toppings);
});

module.exports = router;
