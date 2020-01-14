import React, { Component } from 'react';

import './PizzaForm.css';

export class PizzaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: '',
      description: '',
      price: '',
      detail: '',
      img: ''
    };
  }

  _setData = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _sendData = e => {
    e.preventDefault();
    const pizza = this.state;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const pizzaData = {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(pizza),
      mode: 'cors'
    };

    fetch('http://localhost:8080/form', pizzaData)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this._sendData}>
          <label htmlFor=''>Pizza</label>
          <input onChange={this._setData} type='text' name='pizza' />
          <label htmlFor=''>Description</label>
          <input onChange={this._setData} type='text' name='description' />
          <label htmlFor=''>Price</label>
          <input onChange={this._setData} type='text' name='price' />
          <label htmlFor=''>Detail</label>
          <input onChange={this._setData} type='text' name='detail' />
          <label htmlFor=''>Img</label>
          <input onChange={this._setData} type='text' name='img' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PizzaForm;
