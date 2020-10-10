import React from 'react';
import ReactDom from 'react-dom';

// css
import './icons.css';

// constants
import servicesIconsObj from '../../../constants/ServicesIconsObj';


function Icons() {
    return (
        <div className="icons">
            {
                servicesIconsObj.map((item) => {
                    return (
                        <div className="icons__item" key={item.id}>
                            <img className="icons__item_img" src={item.src} alt={item.alt}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Icons;