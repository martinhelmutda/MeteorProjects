import React from 'react';
import {Link} from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
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

    Accounts.createUser({email, password}, (err) => {
      console.log('Signup callback', err);
      if (err) {
        this.setState({error: err.reason})
      }else {
        this.setState({error:''})
      }
    });
  }
  render() {
    return(
      <div>
      <h1>Signup</h1>
      {this.state.error ? <p>{this.state.error}</p> : undefined}
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="email" name="email" ref="email" placeholder="Email"></input>
        <input type="password" name="password" ref="password" placeholder="Password"></input>
        <button>Create Account</button>
      </form>
      <Link to="/">¿YA tienes una cuenta?</Link>

      </div>
    );
  }
}
