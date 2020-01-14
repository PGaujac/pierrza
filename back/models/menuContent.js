const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
  pizza: String,
  description: String,
  price: String,
  detail: String,
  img: String
});

module.exports = mongoose.model('MenuContent', MenuSchema);
