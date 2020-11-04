import React from 'react';

// css
import './featuredWorks.css';

// constants
import featuredWorksObj from '../../constants/FeaturedWorksObj/index.js';

// commons
import Title from '../../commons/title'


function FeaturedWorks() {
    return (
        <section className="featured-works">
            <Title
                title={<span><span className="logo__name_color">featured</span> works</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut"
            />
            <div className="wrapper">
                <div className="featured-works__cont">
                    {
                        featuredWorksObj.map((item) => {
                            return (
                                <div className="featured-works__item" key={item.id} style={{backgroundColor: item.bgColor}}></div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedWorks;