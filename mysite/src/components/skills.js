import React, { Component } from 'react';
import SkillBar from 'react-skillbars';


const skills = [
  {type: "C++", level: 90},
  {type: "Python", level: 90},
  {type: "Javascript", level: 50},
  {type: "R", level: 30},
];

const skills2 = [
  {type: "Django", level: 90},
  {type: "React", level: 50},
];

const skills3 = [
  {type: "EC2", level: 70},
  {type: "RDS", level: 70},
  {type: "S3", level: 70},
  {type: "EB", level: 40},
];



const colors = {
  "bar": "black",
  "title": {
    "text": "#fff",
    "background": "#3333ff"
  }
}




class Skills extends Component {
  render() {
    return(
      <div className="wrapper" id="skills">
        <h3>Technical Skills</h3>
        <SkillBar skills={skills} colors = {colors}/>
        <SkillBar skills={skills2} colors = {colors}/>
        <SkillBar skills={skills3} colors = {colors}/>
      </div>



    )
  }
}

export default Skills;
