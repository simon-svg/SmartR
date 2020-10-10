import React from 'react';
import ReactDom from 'react-dom';

// css
import './clients.css';

// commons
import Title from '../../commons/title';

function Clients() {
    return (
        <section className="clients">
            <Title
                title={<span><span className="logo__name_color">clients</span> said</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet"
            />
            <div className="wrapper">
                <div className="clients__cont">
                    <div className="clients__cont_arrow clients__cont_arrowL">
                        <i className="fas fa-angle-left clients__arrow_icon"></i>
                    </div>
                    <div className="clients__cont_inside">
                        <div className="clients__cont_items">
                            <div className="clients__cont_item">
                                <div className="clients__item_image"></div>
                                <p className="clients__item_info">
                                    “This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”
                                </p>
                                <div className="clients__item_stars">
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                </div>
                                <h4 className="clients__item_bot">
                                    <span className="clients__item_bot_bold">kita say, </span>
                                    HK Director
                                </h4>
                            </div>
                            <div className="clients__cont_item">
                                <div className="clients__item_image"></div>
                                <p className="clients__item_info">
                                    “This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”
                                </p>
                                <div className="clients__item_stars">
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                    <img className="clients__item_star" src={require("../../img/star.png")} alt="star" />
                                </div>
                                <h4 className="clients__item_bot">
                                    <span className="clients__item_bot_bold">al rayhan, </span>
                                    UX Director
                                </h4>
                            </div>
                        </div>
                        <div className="clients__cont_panel">
                            <div className="clients__cont_panel_item"></div>
                            <div className="clients__cont_panel_item"></div>
                            <div className="clients__cont_panel_item"></div>
                        </div>
                    </div>
                    <div className="clients__cont_arrow clients__cont_arrowR">
                        <i className="fas fa-angle-right clients__arrow_icon"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;