import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Physical extends React.Component{
    render(){
        const dexModifier = this.props.Character.RawStats.filter(s => s.Name === 'DEX')[0].Modifier;
        const spellSave = this.props.Character.Spells.DC +
            this.props.Character.Proficiencies.Bonus[0].Value +
            this.props.Character.GetModifier('INT');
        const spellAttack = this.props.Character.Proficiencies.Bonus[0].Value +
            this.props.Character.GetModifier('INT');
        return (
            <div>
                <Paper lg={12}>
                    <Grid container>
                        <Grid item lg={4}>
                            {
                                this.props.Character.Armour.AC 
                                + dexModifier
                            }
                            <div className='stat-label'>Armour Class</div>
                        </Grid>
                        <Grid item lg={4}>
                            +{dexModifier}
                            <div className='stat-label'>Initiative</div>
                        </Grid>
                        <Grid item lg={4}>
                            {this.props.Character.Body.Speed}
                            <span className='climbing-speed'>Climbing {this.props.Character.Body.ClimbingSpeed}</span>
                            <div className='stat-label'>Speed</div>
                        </Grid>
                        <Grid item lg={12}>
                            {this.props.Character.Character.HitPoints}
                            <div className='stat-label'>Max HP</div>
                        </Grid>
                        <Grid item lg={12}>
                            {this.props.Character.Character.Level}
                            {this.props.Character.Character.HitDicePerLevel}
                            <div className='stat-label'>Hit Dice</div>
                        </Grid>
                        <Grid item lg={6}>
                            {spellSave}
                            <div className='stat-label'>Spell Save DC</div>
                        </Grid>
                        <Grid item lg={6}>
                            +{spellAttack}
                            <div className='stat-label'>Spell Attack</div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}