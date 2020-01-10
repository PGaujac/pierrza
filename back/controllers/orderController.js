orderController = (req, res) => {
  req.body.map((element, index) => {
    console.log(element.pizza);
    console.log(element.toppings);
    console.log(element.price);
  });

  res.json({
    Success: true,
    message: 'Merci pour votre commande ! '
  });
};

module.exports = orderController;
