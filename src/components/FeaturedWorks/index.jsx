import React from 'react';
import ReactDOM from 'react-dom';

// css
import './featuredWorks.css';

// constants
import Title from '../../constants/title'

// components
import Works from './Works';


function FeaturedWorks(){
    return(
        <section className="featured-works">
            <Title 
            title={<span><span className="logo__name_color">featured</span> works</span>}
            subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut"
            />
            <div className="wrapper">
                <div className="featured-works__cont">
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                    <Works />
                </div>
            </div>
        </section>
    )
}

export default FeaturedWorks;