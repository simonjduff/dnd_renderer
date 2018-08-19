import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class Abilities extends React.Component{
    ability(ability){
        var limitations = (ability.Limitation || []).map(l => <li key={`${ability.Name}${l}`}>{l}</li>);
        var bonuses = (ability.Bonus || []).map(b => <li key={`${ability.Name}${b}`}>{b}</li>);

        return(
            <div key={ability.Name}>
                <h4>{ability.Name}</h4>
                <div className='abilityLabel'>Bonuses</div>
                <ul>
                    {bonuses}
                </ul>
                <div className='abilityLabel'>Limitations</div>
                <ul>
                    {limitations}
                </ul>
            </div>
        );
    }

    render(){
        const abilities = this.props.Abilities.map(a => this.ability(a));

        return (
            <Paper className='abilities-container'>
                <h3>Abilities</h3>
                {abilities}
            </Paper>
        );
    }
}