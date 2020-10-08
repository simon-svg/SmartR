import React from 'react';
import ReactDOM from 'react-dom';

// css

import './message.css';


function Message() {
    return (
        <div className="home__bot">
            <div className="message">
                <h3 className="message__title"><span className="logo__name_color">send</span> a message</h3>
                <div className="message__cont">
                    <input className="message__input" type="text" placeholder="your name" />
                    <input className="message__input" type="email" placeholder="your email" />
                    <textarea className="message__input message__textarea" type="text" placeholder="your message" />
                </div>
                <button className="message__but">send message <i className="fas fa-long-arrow-alt-right message__but_icon"></i></button>
            </div>
        </div>
    )
}

export default Message;