import React from 'react';
import ReactDOM from 'react-dom';

// css
import './title.css'

function Title(props){
    return(
        <div className={"title", props.classname}>
            <h2 className="title__head">{props.title}</h2>
            <h3 className="subtitle">{props.subtitle}</h3>
        </div>
    )
}

export default Title;