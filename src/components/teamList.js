import React from 'react';
import Team from './team';

class TeamList extends React.Component {
    render() {
        let teams = this.props.teams;

        if (this.props.filter && this.props.filter.seeding) {
            teams = teams.filter(team => team.seeding === this.props.filter.seeding);
        }

        return <div>
            <h4 className="team-list__title">{this.props.title || ''}</h4>
            <ul className="team-list__list">
                {teams.map((team, index) => {
                    return <li className="team-list__list-item" key={index}><Team name={team.name}  /></li>
                })}
            </ul>
        </div>
    }
}

export default TeamList;
