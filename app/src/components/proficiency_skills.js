import React from 'react';
import skills from './skills.json';

export default class ProficiencySkills extends React.Component{
    render(){
        const proficiencies = this.props.Proficiency.Other
            .reduce((acc, curr) =>
                acc.concat(curr.Items),
                []
            ).reduce((acc, curr) => {
                acc[curr.Name] = curr;
                return acc;
            }, {});

        const skillsHtml = skills.map(p => {
            const expert = (proficiencies[p.Name] || {}).Expert ? "expert" : "";
            const proficient = proficiencies[p.Name] ? "proficient" : "";
            const stat = this.props.Stats.filter(s => s.Name === p.Stat)[0];

            if (!stat){
                console.log(`ERR could not identify stat ${p.Stat}`);
            }

            var multiplier = 0;
            if (expert){
                multiplier = 2;
            }
            else if (proficient){
                multiplier = 1;
            }

            var statValue = `+${stat.Modifier + (this.props.Proficiency.Bonus[0].Value * multiplier)}`;

            return (<div key={p.Name}>
                        <div className={`proficiencyName ${expert} ${proficient}`} key={`${p.Name}`}>
                            {p.Name} <span>{statValue}</span>
                        </div>
                    </div>
            );
        });
        return (<div>
                <h3>Skills</h3>
                {skillsHtml}
            </div>);
    }
}