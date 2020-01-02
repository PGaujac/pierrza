//Cart page Component

//Module import
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//Style import
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  displayCart = () => {
    const cart = this.props.cart.map((element, index) => (
      <tr key={index}>
        <td>{element.pizza}</td>
        <td>{element.price}</td>
      </tr>
    ));
    return cart;
  };

  totalPrice = () => {
    return 10 * this.props.cart.length;
  };
  render() {
    return (
      <div id='cart'>
        <div className='cart-content'>
          <h1 className='main-heading'>Votre Panier </h1>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Table striped bordered hover variant='dark'>
                    <thead>
                      <tr>
                        <th>La Pierrza</th>
                        <th>Le Prix</th>
                      </tr>
                    </thead>
                    <tbody>{this.displayCart()}</tbody>
                    <tfoot>
                      <tr>
                        <td className='total'>Total</td>
                        <td>{this.totalPrice()}$</td>
                      </tr>
                    </tfoot>
                  </Table>
                </Card>
                <Button onClick={() => this.props.clearCart()} variant='light'>
                  Vider le Panier
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='overlay'></div>
      </div>
    );
  }
}

export default Cart;
