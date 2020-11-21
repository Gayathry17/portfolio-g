import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './Education.css'
import { Paper } from '@material-ui/core';

function Education() {
    return (
        <div id="education" className="education">
          
            <h4>Education</h4>        
            <h2>I STUDIED AT</h2>      
            <div className="accordion_panels">
            <Accordion className="accordion" defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className="dropdown"/>} aria-controls="panel2a-content" id="panel2a-header"
              >
                <Typography className="education_heading">Primary Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  
                <Paper style={{backgroundColor: '#330010'}}>
                  <h3 className="education_years">2007 - 2017</h3>
                  <span className="institution">
                      <a href="https://www.icbse.com/schools/don-bosco-ems-yordhanapuram-0lqod1" target="_blank" rel="noopener noreferrer">Don Bosco Central School</a>
                  </span>
                  <p className="institution_about">
                  I spent a better part of my childhood here and is still the home to many of my best memories.
                  </p>
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className="dropdown"/>} aria-controls="panel2a-content" id="panel2a-header"
              >
                <Typography className="education_heading">High School Secondary Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  
                <Paper style={{backgroundColor: '#330010'}}>
                  <h3 className="education_years">2017 - 2019</h3>
                  <span className="institution">
                      <a href="https://saraswathividyanikethanschool.com/" target="_blank" rel="noopener noreferrer">Saraswathi Vidyaniketan Public School</a>
                  </span>
                  <p className="institution_about">
                  I spent two precious hectic years here preparing for the biggest dream every Indian child who wants to be an engineer has, cracking the entrance exam.
                  </p>

                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className="dropdown"/>} aria-controls="panel2a-content" id="panel2a-header"
              >
                <Typography className="education_heading">Bachelor Degree in Computer Science</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper style={{backgroundColor: '#330010'}}>
                  <h3 className="education_years">2019 - PRESENT</h3>
                  <span>
                      <a href="http://www.mec.ac.in/" target="_blank" rel="noopener noreferrer">Model Engineering College, Thrikkakara</a>
                  </span>
                  <p className="institution_about">
                  So.....I cracked the entrance and got admitted in Model Engineering College which is pretty much an awesome place where I found a lot of tech geeks with similar interests. 
                  Waiting to see what the next few years have in store for me here
                  </p>
                </Paper>
              </AccordionDetails>
            </Accordion>
            </div>
            
        </div>

    )
}

export default Education
