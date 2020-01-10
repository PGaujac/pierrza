//Home page Component

//Module import
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
      <div>
        <div id='showcase' className='homeContainer'>
          <Carousel className='carousel'>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/img/pizza1.jpg'
                alt='First slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/img/pizza2.jpg'
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/img/pizza3.jpg'
                alt='Third slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src='/img/pizza4.jpg'
                alt='Fourth slide'
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
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
      </div>
    );
  }
}

export default Home;
