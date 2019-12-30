//Cart page Component

//Module import
import React, { Component } from 'react';

//Style import
import './Cart.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PizzaPerso from '../PizzaPerso/PizzaPerso';
import PizzaPerso2 from '../PizzaPerso/PizzaPerso2';
import PizzaPersoSelect from '../PizzaPerso/PizzaPersoSelect';
class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <PizzaPersoSelect />
      </div>
    );
  }
}

export default Cart;
