import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import { SiPython, SiJava } from "react-icons/si";
import { RiPenNibLine } from "react-icons/ri";
import { BiCodeCurly, BiBarChartAlt } from "react-icons/bi";

import './Skills.css'
import Skill from './Skill/Skill'

function Skills() {
    return (
        <div id="skills" className="skills">
                <h4>Skills</h4>      
                <h2>I AM GOOD AT</h2>    
                <div className="skill_cards">
                    <Skill Icon={LanguageIcon} title="Web Development" desc="This was basically a part of lockdown productiveness and now I am pretty good at it (you would know, you are looking at a website I created!)."/>
                    <Skill Icon={SiPython} title="Python" desc="Learning Python was an impulsive decision, an excellent one at that. Now I can pretty much solve all problems posed using just some lines of code."/>
                    <Skill Icon={SiJava} title="Java" desc="Even though I started learning Java out of mere compulsion, because it was a mandatory course in the syllabus, I soon realised that I had a knack for coding and loved the process."/>
                    <Skill Icon={BiCodeCurly} title="C/C++" desc="C++ was the first coding language that I learnt and I was hooked immediately. It was like solving a puzzle using the best logic and there is nothing I like more than that."/>
                    <Skill Icon={RiPenNibLine} title="Writing" desc="I'm an avid reader and so on any average day I have a million words and ideas floating about in my head. Putting a pen to a paper is my way of expressing myself and its something I enjoy a lot."/>
                    <Skill Icon={BiBarChartAlt} title="Design" desc="Since I was a child, I have always been very interested in art and design, be it redecorating my entire room to be anime themed, just sketching in a book or even designing websites."/>
                </div>


        </div>
    )
}

export default Skills
