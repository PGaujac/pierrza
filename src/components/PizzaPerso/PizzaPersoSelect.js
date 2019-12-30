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
      toppings: [],
      prix: '6$'
    };
  }
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

  clearToppings = () => {
    this.setState({ toppings: [] });
  };

  displayToppings = () => {
    const ingr = this.state.toppings.map((element, index) => (
      <tr key={index}>
        <td>{element.name}</td>
      </tr>
    ));
    return ingr;
  };

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
                        <th>Votre Pierrza</th>
                        {/* <th>Son prix</th> */}
                        <th onClick={() => this.clearToppings()}>Reset</th>
                      </tr>
                    </thead>
                    <tbody>{this.displayToppings()}</tbody>
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
