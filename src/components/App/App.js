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

//Styles import
import './App.css';

//App component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navStyle: '',
      btnDisplay: '',
      cart: []
    };
  }

  addToCart = pizza => {
    const cartContent = this.state.cart.slice(0);
    cartContent.push(pizza);
    this.setState({ cart: cartContent });
    console.log(pizza);
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
                <Link to='/'>Home</Link>

                <Link to='About'>About</Link>

                <Link to='Pizza-Maker'>Pizza Maker</Link>

                <Link to='Cart'>Cart</Link>
              </div>
            </div>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/Pizza-Maker'>
            <PizzaPersoSelect addToCart={this.addToCart}></PizzaPersoSelect>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Cart'>
            <Cart cart={this.state.cart} clearCart={this.clearCart}></Cart>
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
