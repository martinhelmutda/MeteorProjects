import React from 'react';
import { history } from 'react-router-dom';

export default class Link extends React.Component {
  onLogout() {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <p>Link component here </p>
        <button onClick={this.onLogout.bind(this)}> Logout </button>
      </div>
    );
  }
}
