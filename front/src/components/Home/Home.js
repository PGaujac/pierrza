//Home page Component

//Module import
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Menu from '../Menu/Menu';

//Style import
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  _showMenu = e => {
    let offset = e.target.offsetTop;
    this.setState({ showMenu: true }, () => {
      window.scroll(0, offset);
    });
  };

  render() {
    return (
      <Container fluid style={{ padding: '0' }}>
        <Row>
          <Col>
            <div id='showcase' className='homeContainer'>
              <Carousel className='carousel'>
                <Carousel.Item>
                  <Image
                    fluid
                    className='d-block'
                    src='/img/pizza1.jpg'
                    alt='First slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    fluid
                    className='d-block w-100 h-100 img-fluid'
                    src='/img/pizza2.jpg'
                    alt='Third slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    fluid
                    className='d-block w-100 h-100 img-fluid'
                    src='/img/pizza3.jpg'
                    alt='Third slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    fluid
                    className='d-block w-100 h-100 img-fluid'
                    src='/img/pizza4.jpg'
                    alt='Fourth slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    fluid
                    className='d-block w-100 h-100 img-fluid'
                    src='/img/pizza5.jpg'
                    alt='Fifth slide'
                  />
                </Carousel.Item>
              </Carousel>
              <div className='btn-container'>
                <button
                  onClick={this._showMenu}
                  className={'showcase-btn ' + this.props.btnStyle}
                >
                  Click ici pour découvrir nos spécialités !
                </button>
              </div>
            </div>

            <div className={this.state.showMenu ? '' : 'd-none'}>
              <Menu addToCart={this.props.addToCart} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
