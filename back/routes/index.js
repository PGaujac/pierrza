const express = require('express');
const router = express.Router();
const menu = require('../data/menu.json');
const toppings = require('../data/toppings.json');
const MenuContent = require('../models/menuContent');

/* GET home page. */
router.get('/menu', (req, res, next) => {
  //res.send(menu);
  MenuContent.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

router.get('/toppings', (req, res, next) => {
  res.send(toppings);
});

module.exports = router;
