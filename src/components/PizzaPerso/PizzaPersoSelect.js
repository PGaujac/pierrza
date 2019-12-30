import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { toppings } from '../../data/toppings.json';
import Table from 'react-bootstrap/Table';

export class PizzaPersoSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topping: {
        name: '',
        price: ''
      },
      selectedTopping: {}
    };
  }
  setTopping = topping => {
    this.setState({ topping });
  };

  createPizza = () => {
    const ingredients = toppings.map((element, index) => (
      <tr key={index}>
        <td onClick={() => this.setTopping(element)}>{element.name}</td>
        <td>{element.price}</td>
      </tr>
    ));
    return ingredients;
  };

  render() {
    return (
      <div id='menu'>
        <div className='content'>
          <h1 className='main-heading'>Créez votre Pierrza</h1>
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
                        <th>Son prix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.topping.name}</td>
                        <td>{this.state.topping.price}</td>
                      </tr>
                    </tbody>
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
