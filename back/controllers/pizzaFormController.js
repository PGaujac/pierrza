const MenuContent = require('../models/menuContent');

pizzaFormController = (req, res, next) => {
  console.log(req.body);
  if (
    !req.body ||
    !req.body.pizza ||
    !req.body.description ||
    !req.body.price ||
    !req.body.detail ||
    !req.body.img
  ) {
    res.json({
      success: false
    });
    console.log('Something went wrong, did you fill all the inputs ?');
    return;
  }

  const pizza = new MenuContent(req.body);

  pizza.save().then(() => {
    console.log('OK');
    error => {
      console.log(error);
    };
  });
  res.json({
    success: true
  });
};

module.exports = pizzaFormController;

// const pizza1 = new MenuContent({
//   pizza: 'MARGUERITE',
//   description: 'Tomate, fromage, olives, origan',
//   price: '7',
//   detail:
//     "Sauce tomate fraiche du jour, emmental direct de la ferme , olives a peine tombées de l'arbre.",
//   img: 'http://localhost:3000/img/margerite.jpeg'
// });

// pizza1.save().then(() => {
//   console.log('OK');
//   error => {
//     console.log(error);
//   };
// });
// const pizza = new MenuContent(req.body)
