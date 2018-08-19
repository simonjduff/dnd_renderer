import React from 'react';
import Paper from '@material-ui/core/Paper';
export default class Spells extends React.Component{
    render(){
        const materials = (spell) => {
            var mats = false;
            if (spell.Materials){
                mats = (spell.Materials || [])
                    .map(c => <li key={c}>{c}</li>);
            }

            if (mats){
                return (
                    <div>
                        Materials
                        <ul>{mats}</ul>
                    </div>
                );
            }
        };

        const spells = this.props.Spells.List.map(s => {
            return (
                <div key={s.Name}>
                    <h4>{s.Name}</h4>
                    <div>Level {s.Level}</div>
                    <div>Components: {s.Components}</div>
                    <div>Casting Time: {s.CastingTime}</div>
                    <div>Range: {s.Range}</div>
                    <div>Duration: {s.Duration}</div>
                    <div>Source: {s.Source}</div>
                    {materials(s)}
                </div>
            );
        });

        return (
            <Paper className='equipment-container'>
                <h3>Spells</h3>
                {spells}
            </Paper>
        );
    }
}