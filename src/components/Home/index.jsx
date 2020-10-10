import React from 'react';
import ReactDOM from 'react-dom';

// css
import './home.css';

// components
import Message from './Message'

// constants
import Title from '../../commons/title'


function Home() {
    return (
        <section className="home">
            <div className="home__cont">
                <Title
                    classname="home__cont_title"
                    title={<span><span className="logo__name_color">smart</span> agency landing page</span>}
                    subtitle="lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut lorem impsum dolor sit amet la dhes birut dolor sit amet la dhes birut amet la dhes birut impsum dolor sit amet la dhes bir birut lorem impsum dolor sit amet la  sit amet la dhes birut"
                />
                <div className="wrapper">
                    <Message />
                </div>
            </div>
        </section>
    )
}

export default Home;