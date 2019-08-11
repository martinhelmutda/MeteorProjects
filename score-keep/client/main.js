import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

//MiniMongoDB
import {Players, calculatePlayersPositions} from './../imports/api/players';
import App from './../imports/ui/App'


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players= Players.find( {}, {sort: {score: -1 }}).fetch();
    let title = 'Score Keep';
    let positionedPlayers = calculatePlayersPositions(players);
    ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
  });
});
