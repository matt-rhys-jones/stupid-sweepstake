import React from 'react';
import Player from './player';
import TeamList from './teamList';
import ALL_TEAMS from '../data/availableTeams.js';

const KATY = 'katy';
const MATT = 'matt';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawnTeams: {
                katy: [],
                matt: []
            },
            teams: ALL_TEAMS,
            player: KATY
        };
    
        this.drawTeam = this.drawTeam.bind(this);
    }

    drawTeam() {
        const lowSeededTeamsLeft = this.state.teams.find(team => team.seeding === 2);
        const drawableTeams = [];

        if (lowSeededTeamsLeft) {
            drawableTeams.push(...this.state.teams.filter(team => team.seeding === 2));
        }
        else {
            drawableTeams.push(...this.state.teams.filter(team => team.seeding === 1));
        }
        
        const drawnIndex =  Math.floor(Math.random() * Math.floor(drawableTeams.length));
        const drawnTeam = drawableTeams[drawnIndex];
        const availableTeamToRemove = this.state.teams.findIndex(team => team.name === drawableTeams[drawnIndex].name);
        const newAvailableTeams = [].concat(this.state.teams);
        newAvailableTeams.splice(availableTeamToRemove, 1);

        this.setState((prevState) => ({
            drawnTeams: {
                katy: prevState.player === KATY ? prevState.drawnTeams.katy.concat(drawnTeam) : prevState.drawnTeams.katy,
                matt: prevState.player === MATT ? prevState.drawnTeams.matt.concat(drawnTeam) : prevState.drawnTeams.matt
            },
            teams: newAvailableTeams,
            player: prevState.player === KATY ? MATT : KATY
        }));
    }

    render() {
        let action;

        if (this.state.teams.length) {
            action =  <button className="button-primary" onClick={this.drawTeam}>Draw Team ({this.state.player})</button>
        } else {
            action = <span className="success">Thank you for taking part in the draw, good luck!</span>;
        }

        return <div className="container">
                <div className="row players">
                    <div className="six columns">
                        <Player name="Katy" teams={this.state.drawnTeams.katy} />
                    </div>
                    <div className="six columns">
                        <Player name="Matt" teams={this.state.drawnTeams.matt} />
                    </div>
                </div>

                <div className="row actions">
                    <div className="twelve columns">
                    {action}
                    </div>
                </div>

                <div className="row">
                    <div className="six columns">
                        <TeamList teams={this.state.teams} filter={{seeding: 1}} title="Pot 1" />
                    </div>

                    <div className="six columns">
                        <TeamList teams={this.state.teams} filter={{seeding: 2}} title="Pot 2" />
                    </div>
                </div>
            </div>
    }
}

export default App;
