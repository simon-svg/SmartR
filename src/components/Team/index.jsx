import React from 'react';
import ReactDOM from 'react-dom';

// css
import './team.css';

// constants
import Title from '../../commons/title';

// components
import TeamItem from './TeamItem';


function Team() {
    return (
        <section className="team">
            <Title
                title={<span><span className="logo__name_color">team</span> chinen & skills</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet"
            />
            <div className="wrapper">
                <TeamItem />
            </div>
        </section>
    )
}

export default Team;