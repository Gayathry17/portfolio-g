import React from 'react';
// import Typist from 'react-typist';
import ReactTypingEffect from 'react-typing-effect'
import 'react-typist/dist/Typist.css'

import profile from '../../media/g.jpeg'
// import profile2 from '../../media/g1.jpeg'

import './Home.css';

function Home() {
    return (
        <div id="home" className="home">
            <div id="space">
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
            </div>
            <div className="home_image">
                <img src={profile} alt="" />  
                <div className="text-block">
                    <h3>I am</h3>
                    {/* <Typist cursor={{show: false}}>
                        <h2>Gayathry S</h2>
                    </Typist> */}
                    <h2><ReactTypingEffect text="Gayathry" /></h2>
                    
                        
                </div>  
            </div>
            <div className="home_name">
                    <h3>I am</h3>
                    <h2><ReactTypingEffect text="Gayathry" /></h2>
                    {/* <Typist cursor={{show: false}} avgTypingDelay={40}>
                        <h2>Gayathry S</h2>
                    </Typist> */}
            </div>
        </div>
        
    )
}

export default Home
