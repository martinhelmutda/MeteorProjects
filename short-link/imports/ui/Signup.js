import React from 'react';
import {Link} from 'react-router-dom'

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      count: 0,
    };
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => {
          this.setState({count: this.state.count - 1})
        }}> -1 </button>
        <button onClick={this.increment.bind(this)}> +1 </button>
      <Link to="/">¿YA tienes una cuenta?</Link>

      </div>
    );
  }
}
