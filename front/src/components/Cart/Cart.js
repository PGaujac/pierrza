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
        <td>
          {element.price}$
          <i
            onClick={() => this.removePizza(index)}
            className='fas fa-window-close'
          ></i>
        </td>
      </tr>
    ));
    return cart;
  };

  removePizza = index => {
    const cartClone = this.props.cart;
    cartClone.splice(index, 1);
    this.setState({
      cart: cartClone
    });
  };

  totalPrice = () => {
    const total = this.props.cart.reduce(
      (accumulator, element) => accumulator + parseFloat(element.price),
      0
    );
    return total;
  };

  disableButton = () => this.props.cart.length > 0;
  //Add cart content to local storage
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
                <div className='btn-container'>
                  <Button
                    onClick={() => this.props.clearCart()}
                    variant='light'
                  >
                    Vider le panier
                  </Button>
                  <Button
                    onClick={() => this.props.post()}
                    variant='light'
                    disabled={!this.disableButton()}
                  >
                    Commander !
                  </Button>
                </div>
                <p id='orderDisplay'></p>
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
