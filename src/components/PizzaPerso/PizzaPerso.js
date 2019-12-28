import React, { Component } from 'react';
import { toppings } from '../../data/toppings.json';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Draggable from './Dnd/Draggable/index';
import Dropable from './Dnd/Dropable/index';
import styled from 'styled-components';

import './PizzaPerso.css';

const Item = styled.div`
padding:8px;
color#555;
background-color:#fff;
border-radius:3px;
`;

const droppableStyle = {
  backgroundColor: '#f7f7f7',
  width: '450px',
  height: '80vh',
  margin: '32px',
  padding: '20px',
  textAlign: 'center'
};

export class PizzaPerso extends Component {
  createPizza = () => {
    const ingredients = toppings.map((element, index) => (
      <Draggable id={index} style={{ margin: '8px' }}>
        <Item>{element.name}</Item>
      </Draggable>
    ));
    return ingredients;
  };

  render() {
    return (
      <div id='toppings'>
        <div className='content'>
          <Container>
            <h1 className='topping-heading'>
              Drag and Drop to Create your Pizza
            </h1>
            <Row>
              <Col>
                <Dropable id='dr1' style={droppableStyle}>
                  {this.createPizza()}
                </Dropable>
              </Col>
              <Col>
                <Dropable id='dr2' style={droppableStyle}></Dropable>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='overlay'></div>
      </div>
    );
  }
}

export default PizzaPerso;
