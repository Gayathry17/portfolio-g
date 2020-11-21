import React from 'react'
import Fade from 'react-reveal/Fade';
import { Avatar } from '@material-ui/core'

import './About.css'
// import image from '../../media/default.jpg'
import image from '../../media/gAvatar.jpeg'
import AboutImg1 from '../../media/about1.svg'
import AboutImg2 from '../../media/about2.svg'



function About() {
    return (
        <div id="about" className="about">
            
            <h4>About Me</h4>      
            <h2>WHO AM I?</h2>   
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
   
            <div className="about_container">
                <div className="about_left">
                    <Fade left>
                        
                        <p>Hey there! <br/>
                        My name is Gayathry S and I'm a computer engineering student in Model Engineering College, Thrikkakara.
                        I love solving problems and finding solutions to puzzles. And what's a more elegant way to solve a problem than using some lines of code. 
                        Which is exactly the reason I love learning computer science so much. 
                        My passions are technology and dancing and when I'm not designing a web app or trying to solve a puzzling problem, 
                        I'm probably dancing along to some song that I just heard on the radio.
                        </p>
                    </Fade>
                    <img src={AboutImg1} alt="" />

                </div>
                <div className="about_center">
                    <Avatar className="about_icon" src={image} alt="profie" />
                </div>
                <div className="about_right">
                    <img src={AboutImg2} alt="" />
                    <Fade right >
                        <p>
                        I also do a little singing, reading and writing. Well you could call me a Jack( or Jill?) of all trades.  
                        I'm also a big time anime fan and strongly believe that Naruto is arguably the best thing in the world.
                        This site is a collection of my works and interests, if any of those things intrigue you, don't hesitate to reach out. <br />
                        Thanks for dropping by!
                        </p>
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}

export default About
