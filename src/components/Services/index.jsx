import React from 'react';

// css
import './services.css';

// constants
import Title from '../../commons/title'

// components
import Icons from './Icons';
import ServicesInfo from './ServicesInfo';
import ServicesImg from './ServicesImg';


function Services() {
    return (
        <section className="services">
            <Title
                title={<span><span className="logo__name_color">services</span> we provide</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut"
            />
            <div className="wrapper">
                <div className="services__cont">
                    <Icons />
                    <ServicesInfo />
                    <ServicesImg />
                </div>
            </div>
        </section>
    )
}

export default Services;