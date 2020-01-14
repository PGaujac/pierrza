import React, { Component } from 'react';
import io from 'socket.io-client';

import './Chat.css';
const socket = io('http://localhost:8080');

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: ''
    };
  }

  setMessage = e => {
    this.setState({ currentMessage: e.target.value });
  };

  sendMsg = e => {
    if (this.state.currentMessage !== '') {
      e.preventDefault();
      socket.emit('chat message', this.state.currentMessage);
      const message = this.state.messages;
      message.push(this.state.currentMessage);
      this.setState({ messages: message, currentMessage: '' });
    } else {
      return;
    }
  };

  showMessage = () => {
    return this.state.messages.map((element, index) => (
      <li className='chat-item' key={index}>
        {element}
      </li>
    ));
  };

  render() {
    return (
      <div>
        <div className='chat-display'>
          <ul>{this.showMessage()}</ul>
        </div>

        <div className='input'>
          <input
            type='text'
            name=''
            value={this.state.currentMessage}
            onChange={this.setMessage}
          />
          <button onClick={this.sendMsg}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
