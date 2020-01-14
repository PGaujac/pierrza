const express = require('express');
const router = express.Router();
const pizzaFormController = require('../controllers/pizzaFormController');

//Listen for POST request pizza form

router.post('/', pizzaFormController);

module.exports = router;
