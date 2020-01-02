import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import './Detail.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
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
            <p className='pizza-detail'>{pizza.detail}</p>
            <Image
              className='pizza-img'
              src={pizza.img}
              alt='pizza'
              roundedCircle
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className='modal-btn'
              variant='light'
              onClick={this.props.action}
            >
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Detail;
