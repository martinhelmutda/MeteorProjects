import React from 'react';
import {Link} from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login </p>
        <Link to="/signup">¿Ya tienes una cuenta?</Link>
      </div>
    );
  }
}
