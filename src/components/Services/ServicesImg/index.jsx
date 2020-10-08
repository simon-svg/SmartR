import React from 'react';
import ReactDOM from 'react-dom';

// css
import './ServicesImg.css';


function ServicesImg(){
    return(
        <div className="services__img">
            <img className="services__img_apple" src={require(`../../../img/services/apple.png`)} alt="whatch"/>
        </div>
    )
}

export default ServicesImg;