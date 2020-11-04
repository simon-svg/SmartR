import React from 'react';

// css
import './workingProcess.css';

// commons
import Title from '../../commons/title'

// constants
import workingProcessObj from '../../constants/WorkingProcessObj';


function WorkingProcess() {
    return (
        <section className="working-process">
            <Title
                title={<span><span className="logo__name_color">working</span> process</span>}
                subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut"
            />
            <div className="wrapper">
                <div className="working-process__cont">
                    {
                        workingProcessObj.map((item) => {
                            return (
                                <div className="working-process__item" key={item.id} style={{backgroundColor: item.bgColor}}>
                                    <img className="working-process__item_img" src={item.src} alt={item.alt} />
                                    <h3 className="working-process__item_title">{item.title}</h3>
                                    <h4 className="working-process__item_subtitle">Lorem ipsum dolor sit amet consectetur.</h4>
                                    <button className="working-process__item_but">know more</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess;