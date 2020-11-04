import React from 'react';

// css
import './sites.css';

// constants
import sitesObj from '../../constants/SitesObj';


function Sites(){
    return(
        <section className="sites">
            <div className="wrapper">
                <div className="sites__cont">
                    {
                        sitesObj.map((item) => {
                            return(
                                <div className="sites__item" key={item.id}>
                                    <img className="sites__item_img" src={item.src} alt={item.alt}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Sites;