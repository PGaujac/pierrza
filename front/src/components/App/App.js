// Main app component

//Module import
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from '../Home/Home';
import About from '../About/About';
import Cart from '../Cart/Cart';
import PizzaPersoSelect from '../PizzaPerso/PizzaPersoSelect';
import Menu from '../Menu/Menu';
import PizzaForm from '../PizzaForm/PizzaForm';

//Styles import
import './App.css';

//App component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navStyle: '',
      btnDisplay: '',
      cart: [],
      isEmpty: true //this is to try and disable the 'commander' button when cart is empty
    };
  }

  // saveToLocal = () => {
  //   const localCart = this.state.cart;
  //   localStorage.setItem('cart', JSON.stringify(localCart));
  // };
  postCart = () => {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const data = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(this.state.cart)
    };
    console.log(data);
    fetch('http://localhost:8080/cart', data)
      .then(response => response.json())
      .then(
        data => (
          (document.getElementById('orderDisplay').innerHTML = data.message),
          this.clearCart()
        )
      );
  };

  addToCart = pizza => {
    const cartContent = this.state.cart.slice(0);
    cartContent.push(pizza);
    this.setState({ cart: cartContent }); //, () => this.saveToLocal()
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      if (scroll >= 800) {
        this.setState({
          navStyle: 'navBarFaded',
          btnDisplay: 'btnOff'
        });
      } else {
        this.setState({ navStyle: 'navBarOpaque', btnDisplay: '' });
      }

      // if (localStorage.getItem('cart') === null) {
      //   this.setState({ cart: [] });
      // } else {
      //   this.setState({ cart: localStorage.getItem(JSON.parse('cart')) });
      // }
    });
  }
  render() {
    return (
      <Router>
        <Navbar
          expand='lg'
          bg='dark'
          variant='dark'
          sticky='top'
          className={this.state.navStyle}
        >
          <Navbar.Brand className='brand-logo' href='#home'>
            LA PIERRZA
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <div className='nav-container'>
              <div className='nav-wrapper'>
                <Link to='/'>
                  <i className='fas fa-home'></i>
                </Link>

                <Link to='Menu'> Menu</Link>

                <Link to='About'>About</Link>

                <Link to='Pizza-Maker'>Pizza Maker</Link>

                <Link to='Cart'>
                  <i className='fas fa-shopping-cart'></i>
                </Link>
              </div>
            </div>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/form'>
            <PizzaForm />
          </Route>
          <Route path='/Menu'>
            <Menu addToCart={this.addToCart} />
          </Route>
          <Route path='/Pizza-Maker'>
            <PizzaPersoSelect addToCart={this.addToCart}></PizzaPersoSelect>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>

          <Route path='/Cart'>
            <Cart
              cart={this.state.cart}
              clearCart={this.clearCart}
              post={this.postCart}
              isEmpty={this.state.isEmpty}
            ></Cart>
          </Route>
          <Route path='/'>
            <Home
              addToCart={this.addToCart}
              btnStyle={this.state.btnDisplay}
            ></Home>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
