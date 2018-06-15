import React from 'react';
import TeamList from './teamList';

class Player extends React.Component {
    render() {
      return <div>
          <h2 className="player-name">{this.props.name}</h2>
          <TeamList teams={this.props.teams} />
          </div>
    }
}

export default Player;
