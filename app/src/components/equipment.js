import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class Equipment extends React.Component{
    render(){
        const equipment = this.props.Equipment
            .sort((a,b) => a.Name > b.Name)
            .map(e => {
                const count = e.Count ? ` x${e.Count}` : "";
                return <div key={e.Name}>{e.Name}{count}</div>
        });

        return (
            <Paper className='equipment-container'>
                <h3>Equipment</h3>
                {equipment}
            </Paper>
        );
    }
}