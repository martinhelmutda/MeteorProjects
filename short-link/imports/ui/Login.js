import React from 'react';
import {Link} from 'react-router-dom'
import {Meteor} from 'meteor/meteor'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    };
  }
  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login callback', err);
      if (err) {
        this.setState({error: err.reason})
      }else {
        this.setState({error:''})
      }
    });

  }
  render() {
    return (
      <div>
        <h1>Login </h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="Email"></input>
          <input type="password" name="password" ref="password" placeholder="Password"></input>
          <button>Login</button>
        </form>

        <Link to="/signup">¿Ya tienes una cuenta?</Link>
      </div>
    );
  }
}
