import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { toppings } from '../../data/toppings.json';
import Table from 'react-bootstrap/Table';

import './PizzaPersoSelect.css';

export class PizzaPersoSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: []
    };
  }

  // Add toppings to left table
  addToppings = topping => {
    // Clone state, just in case
    if (this.state.toppings.length < 7) {
      const toppings = this.state.toppings.slice(0);
      toppings.push(topping);
      this.setState({
        ...this.state,
        toppings
      });
    } else {
      alert('GREEDY FUCKER (placeholder)');
    }
  };

  displayPrice = () => {
    return this.state.toppings.length + 6;
  };

  //Remove toppings individually
  //Array method has to be changed this only removes the topping that was last added
  removeTopping = () => {
    const toppingsClone = this.state.toppings;
    toppingsClone.pop();
    this.setState({
      toppings: toppingsClone
    });
  };

  clearToppings = () => {
    this.setState({ toppings: [] });
  };

  //Display toppings in right table
  displayToppings = () => {
    const ingr = this.state.toppings.map((element, index) => (
      <tr key={index}>
        <td>{element.name}</td>
        <td>
          <i
            onClick={() => this.removeTopping()}
            className='fas fa-window-close'
          ></i>
        </td>
      </tr>
    ));
    return ingr;
  };

  //Display toppings in left table
  createPizza = () => {
    const ingredients = toppings.map((element, index) => (
      <tr key={index}>
        <td onClick={() => this.addToppings(element)}>{element.name}</td>
        <td>{element.price}</td>
      </tr>
    ));
    return ingredients;
  };

  render() {
    return (
      <div id='perso-menu'>
        <div className='content'>
          <h1 className='main-heading'>Créez votre Pierrza</h1>
          <h4 className='topping-desc'>
            Base 6$ puis 1$ par topping, MAX 7 toppings
          </h4>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Table striped bordered hover variant='dark'>
                    <thead>
                      <tr>
                        <th>Les Ingrédients</th>
                        <th>Les Moneys</th>
                      </tr>
                    </thead>
                    <tbody>{this.createPizza()}</tbody>
                  </Table>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Table striped bordered hover variant='dark'>
                    <thead>
                      <tr>
                        <th className='topping-head'>Votre Pierrza</th>

                        <th
                          className='topping-head'
                          onClick={() => this.clearToppings()}
                        >
                          Reset
                        </th>
                      </tr>
                    </thead>
                    <tbody>{this.displayToppings()}</tbody>
                    <tfoot>
                      <tr>
                        <td className='total'>Total</td>
                        <td>{this.displayPrice()}$</td>
                      </tr>
                    </tfoot>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='overlay'></div>
      </div>
    );
  }
}

export default PizzaPersoSelect;
