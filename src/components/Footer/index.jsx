import React from 'react';

// css
import './footer.css';

// constants
import footerIcons from '../../constants/FooterIcons';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__cont">
                <button className="footer__btn">contact us</button>
                <div className="footer__bot">
                    <div className="footer__bot_icons">
                        {
                            footerIcons.map((item) => {
                                return(
                                    <div className="footer__bot_item" key={item.id}>
                                        <img className="footer__bot_icon" src={item.src} alt={item.alt}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3 className="footer__bot_inside">© 2015 - 2016 Deviserweb Ltd.</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;