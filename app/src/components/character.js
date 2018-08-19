import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Character extends React.Component{
    render(){
        return (
            <Grid container>
                <Grid item xs={3} lg={3}>
                    <Paper className='character-name dndbox'>
                        <div className='character-value'>{this.props.Character.Name}</div>
                        <div className='character-label'>Character</div>
                    </Paper>
                </Grid>
                <Grid item xs={9} lg={9}>
                    <Paper className='character-box dndbox'>
                        <Grid container>
                            <Grid item className='character-class character-container' xs={4} lg={4}>
                                <div className='character-value'>{this.props.Character.Class}</div>
                                <div className='character-label'>Class</div>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <div className='character-value'>{this.props.Character.Background.Name}</div>
                                <div className='character-label'>Background</div>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <div className='character-value'>{this.props.Character.PlayerName}</div>
                                <div className='character-label'>Player</div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4} lg={4}>
                                <div className='character-value'>{this.props.Character.Race}</div>
                                <div className='character-label'>Race</div>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <div className='character-value'>{this.props.Character.Alignment}</div>
                                <div className='character-label'>Alignment</div>
                            </Grid>
                            <Grid item xs={4} lg={4}>
                                <div className='character-value'>N/A</div>
                                <div className='character-label'>XP</div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}