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

//Styles import
import './App.css';

//App component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Router>
				<Navbar expand="lg" bg="dark" variant="dark" sticky="top">
					<Navbar.Brand className="brand-logo" href="#home">
						LA PIERRZA
					</Navbar.Brand>
					<Nav className="mr-auto">
						<div className="nav-container">
							<div className="nav-wrapper">
								<Link to="/">Home</Link>

								<Link to="About">About</Link>

								<Link to="Cart">Cart</Link>
							</div>
						</div>
					</Nav>
				</Navbar>

				<Switch>
					<Route path="/About">
						<About></About>
					</Route>
					<Route path="/Cart">
						<Cart></Cart>
					</Route>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
