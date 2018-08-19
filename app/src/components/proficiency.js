import React from 'react';
import Paper from '@material-ui/core/Paper';
import ProficiencySkills from './proficiency_skills';

export default class Proficiency extends React.Component{
    render(){
        const proficiencyBonus = this.props
            .Proficiency
            .Bonus
            .map(v => v.Value)
            .reduce((acc,v) => acc + v);
        const stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
        const myStats = this.props.Proficiency.SavingThrows.map(s => s.Name);
        const selectedStats = stats.map(s => 
                ({
                    Name: s, 
                    Proficient: myStats.includes(s),
                })
            ).map(s => 
                <div key={s.Name} className="clearfix">
                    <span className={`proficiency-label ${s.Proficient ? "proficient" : ""}`}>{s.Name}</span>
                    <span className={`proficiency-value ${s.Proficient}`}>
                        + {this.props.Stats.filter(v => v.Name === s.Name)[0].Modifier + (s.Proficient ? proficiencyBonus : 0)}
                    </span>
                </div>
            );

        return(
            <div className="proficiencybonus-container">
                <Paper className="dndbox">
                    <span className="proficiencybonus-value">+{proficiencyBonus}</span>
                    <span className="proficiencybonus-label">Proficiency Bonus</span>
                </Paper>
                <Paper>
                    <div className="proficiency-savingthrows dndbox">
                        <h3>Saving Throws</h3>
                        {selectedStats}
                    </div>

                    <ProficiencySkills 
                        Proficiency={this.props.Proficiency}
                        Stats={this.props.Stats} />
                </Paper>
            </div>
        );
    }
}