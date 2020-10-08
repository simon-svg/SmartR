import React from 'react';
import ReactDom from 'react-dom';

// css
import './workingProcess.css';

// constants
import Title from '../../constants/title'


function WorkingProcess(){
    return(
        <section className="working-process">
            <Title 
                title={<span><span className="logo__name_color">working</span> process</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut"
            />
            <div className="wrapper">
                <div className="working-process__cont">
                    <div className="working-process__item working-process__koc">
                        <img className="working-process__item_img" src={require(`../../img/koc.png`)} alt="koc"/>
                        <h3 className="working-process__item_title">koc koi tomi</h3>
                        <h4 className="working-process__item_subtitle">Lorem ipsum dolor sit amet consectetur.</h4>
                        <button className="working-process__item_but">know more</button>
                    </div>
                    <div className="working-process__item working-process__kaimona">
                        <img className="working-process__item_img" src={require(`../../img/kaimona.png`)} alt="koc"/>
                        <h3 className="working-process__item_title">koimona set</h3>
                        <h4 className="working-process__item_subtitle">Lorem ipsum dolor sit amet consectetur.</h4>
                        <button className="working-process__item_but">know more</button>
                    </div>
                    <div className="working-process__item working-process__setting">
                        <img className="working-process__item_img" src={require(`../../img/setting.png`)} alt="koc"/>
                        <h3 className="working-process__item_title">setting koire</h3>
                        <h4 className="working-process__item_subtitle">Lorem ipsum dolor sit amet consectetur.</h4>
                        <button className="working-process__item_but">know more</button>
                    </div>
                    <div className="working-process__item working-process__image">
                        <img className="working-process__item_img" src={require(`../../img/image.png`)} alt="koc"/>
                        <h3 className="working-process__item_title">ko image lara</h3>
                        <h4 className="working-process__item_subtitle">Lorem ipsum dolor sit amet consectetur.</h4>
                        <button className="working-process__item_but">know more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess;