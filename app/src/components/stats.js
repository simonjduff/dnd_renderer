import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Stats extends React.Component{
    render(){
        const statContainers = this.props.Stats.map((stat, index) => 
                <Grid item lg={12} key={stat.Name}>
                    <Paper className="stat-container">
                        <div className='stat-modifier'>(+{stat.Modifier})</div>
                        <div className="stat-value">{stat.Value}</div>
                        <div className="stat-label">{stat.Name}</div>
                    </Paper>
                </Grid>            
        );

        return (
            <Grid container spacing={24} className="dndbox stats-container">
                {statContainers}
            </Grid>
        );
    }
}