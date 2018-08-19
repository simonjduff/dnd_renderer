import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class Inspiration extends React.Component{
    render(){
        return(
            <Paper className="dndbox inspiration-container">
                <span className="inspiration-value">{this.props.Inspiration}</span>
                <span className="inspiration-label">Inspiration</span>
            </Paper>
        );
    }
}