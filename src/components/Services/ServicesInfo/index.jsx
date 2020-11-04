import React from 'react';

// css
import './servicesInfo.css';


function ServicesInfo() {
    return (
        <div className="services-info">
            <h3 className="services-info__title">modern app design</h3>
            <p className="services-info__par services-info__first-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus quas corrupti beatae a consequuntur illum voluptatum, non repellendus mollitia aliquam ullam eum laudantium unde similique voluptates architecto odio autem minus eveniet excepturi fuga delectus! Eligendi, ipsum recusandae. Ullam, odio?</p>
            <p className="services-info__par services-info__second-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            <p className="services-info__par">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="services-info__but">+ know more</button>
        </div>
    )
}

export default ServicesInfo;