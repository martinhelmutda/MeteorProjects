import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(event){
    let playerName = event.target.playerName.value;
    //Prevent refresh
    event.preventDefault();
    if (playerName){
      event.target.playerName.value='';
      Players.insert({
        name : playerName,
        score : this.props.score
      })
    }
  }
  render() {
    return(
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input className="form__input" type="text" name="playerName" placeholder="Nombre del jugador" ></input>
          <button className="button">Agregar jugador</button>
        </form>
      </div>
    )
  }
}
