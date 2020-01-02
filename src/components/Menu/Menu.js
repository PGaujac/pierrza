import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { menu } from '../../data/menu.json';
import Table from 'react-bootstrap/Table';
import Detail from '../Detail/Detail';

import './Menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      pizza: null,
      show: false,
      cart: []
    };
  }
  handler() {
    this.setState({
      show: false
    });
  }

  // addToCart = pizza => {
  //   const cartContent = this.state.cart.slice(0);
  //   cartContent.push(pizza);
  //   this.setState({ cart: cartContent });
  // };

  setPizza = pizza => {
    this.setState({
      pizza
    });
    this.setState({ show: !this.state.show });
  };

  menu = () => {
    const pizzas = menu.map((element, index) => (
      <tr key={index}>
        <td onClick={() => this.setPizza(element)}>{element.pizza}</td>
        <td>{element.description}</td>
        <td>{element.price}</td>
        <td>
          <i
            onClick={() => this.props.addToCart(element)}
            className='fas fa-cart-arrow-down cartIcon'
          ></i>
        </td>
      </tr>
    ));
    return pizzas;
  };

  render() {
    return (
      <div id='menu'>
        <div className='content'>
          <h1 className='main-heading'>Notre Selection de Pizzas</h1>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Table striped bordered hover variant='dark'>
                    <thead>
                      <tr>
                        <th>La Pierrza</th>
                        <th>Les Ingrédients</th>
                        <th>Les Moneys</th>
                        <th>Au Panier !</th>
                      </tr>
                    </thead>
                    <tbody>{this.menu()}</tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Container>
          <Detail
            pizza={this.state.pizza}
            show={this.state.show}
            action={this.handler}
          />
        </div>

        <div className='overlay'></div>
      </div>
    );
  }
}
