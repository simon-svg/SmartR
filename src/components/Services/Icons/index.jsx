import React from 'react';
import ReactDom from 'react-dom';

// css
import './icons.css';


function Icons(){
    return(
        <div className="icons">
            <div className="icons__item">
                <img className="icons__item_img" src={require(`../../../img/services/graph.png`)} alt="graph"/>
            </div>
            <div className="icons__item">
                <img className="icons__item_img" src={require(`../../../img/services/setting.png`)} alt="graph"/>
            </div>
            <div className="icons__item">
                <img className="icons__item_img" src={require(`../../../img/services/search.png`)} alt="graph"/>
            </div>
            <div className="icons__item">
                <img className="icons__item_img" src={require(`../../../img/services/graph.png`)} alt="graph"/>
            </div>
        </div>
    )
}

export default Icons;