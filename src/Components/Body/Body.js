import React from 'react'
import StarfieldAnimation from 'react-starfield-animation'

import './Body.css'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'


function Body() {
    return (
        <div className="body">
            <StarfieldAnimation
                style={{
                position: 'absolute',
                height: '100%',
                zIndex: '2'
                }}
                numParticles={800}
                lineWidth={3}
                className="starfield"
            />
            <Home />
            <About />
            <Skills />
            <Education />
            <Contact />
        </div>
    )
}

export default Body
