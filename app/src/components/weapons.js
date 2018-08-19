import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Weapons extends React.Component{
    render(){
        const weaponProficiencies = this.props.Character
                .Proficiencies.Other.filter(o => o.Name === 'Weapons')[0].Items
                .map(i => i.Name);

        const weapons = this.props.Character.Equipment
            .filter(e => e.Type === 'Weapon')
            .map(weapon =>
                    {
                        const strBonus = this.props.Character.GetModifier('STR');
                        const dexBonus = this.props.Character.GetModifier('DEX');
            
                        const weaponFinesse = weapon.Properties.includes('Finesse');
            
                        const bonus = (weaponFinesse && dexBonus > strBonus) 
                                        || weapon.Properties.includes('Range') 
                                        ? dexBonus 
                                        : strBonus;
                        
                        const damageBonus = weapon.Properties.includes('Offhand') ? 0 : bonus;
                        const damageBonusString = damageBonus === 0 ? "" : `+${damageBonus}`;

                        const proficient = weapon.Proficiency.filter(p => weaponProficiencies.includes(p)).length > 0;
                        const attack = bonus + (proficient ? this.props.Character.Proficiencies.Bonus[0].Value : 0);
                        return (
                        <tr key={weapon.Name}>
                            <td>{weapon.Name}</td>
                            <td>+{attack}</td>
                            <td>{weapon.Damage}{damageBonusString}</td>
                            <td>{weapon.DamageType}</td>
                        </tr>);
                    }
            );

        return (
            <Paper>
                <Grid container className='equipment-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th><th>Atk</th><th>Damage</th><th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weapons}
                        </tbody>
                    </table>
                </Grid>
            </Paper>
        );
    }
}