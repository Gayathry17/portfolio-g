import React from 'react'
import { Avatar } from '@material-ui/core'
import Flip from 'react-reveal/Flip';


import './Skill.css'


function Skill({ Icon, title, desc }) {
    return (
        <div className="skill">
            <Flip left>
                <div className="skill_icon">
                    <Avatar className="icon">
                        <Icon />
                    </Avatar>
                </div>
                <div className="skill_details">
                    <h3>{title}</h3>
                    <p>
                        {desc}
                    </p>
                </div>
            </Flip>
        </div>
    )
}

export default Skill
