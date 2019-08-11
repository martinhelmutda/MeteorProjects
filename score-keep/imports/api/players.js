import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayersPositions = (players) => {
  let rank = 1;
  return players.map((player, index) => {
  //  console.log("hola", players[index-1], players[index], index);
    //Los jugadores ya están en forma descendente, sólo queda sumar de uno en uno las posiciones
    if (index !== 0 && players[index-1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o'),
    };
  });
};
