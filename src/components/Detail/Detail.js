import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import './Detail.css';

class Detail extends Component {
  state = {
    show: false
  };

  showDetail = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const pizza = this.props.pizza || {};
    return (
      <div>
        <Modal show={this.props.show} centered={true} size='lg'>
          <Modal.Header>
            <Modal.Title>{pizza.pizza}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{pizza.detail}</p>
            <Image
              className='pizza-img'
              src={pizza.img}
              alt='pizza'
              roundedCircle
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='dark'>Ajouter au panier</Button>
            <Button variant='dark' onClick={this.props.action}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Detail;
