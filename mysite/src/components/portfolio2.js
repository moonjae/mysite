import React, { Component } from 'react';
import Image from '../project1.jpg';


class Portfolio2 extends Component {

  render() {
    return(
      <div id="portfolio">
        {/* project1 */}
        <div className="project1">
          {/* left */}
          <div className="left">
            <p className="project-title">Fifa Tracker</p>
            <p className="project-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis ornare tellus sed lacinia. Fusce sit amet auctor mauris, et tincidunt est. Fusce vitae dui dui. Aliquam rutrum nisl tortor, quis sagittis nisl facilisis eu. Etiam dapibus eu ipsum non laoreet. Nullam tempus ipsum nec mi tincidunt eleifend. Etiam sed dapibus nulla, at pretium turpis.

Praesent nec ornare diam. Fusce eu tincidunt sapien, non dictum ex. Maecenas consectetur sollicitudin ante et laoreet. Cras non tellus nisl. Sed nisi urna, aliquam eu tincidunt volutpat, semper eu lorem. Nullam tempor, erat ac egestas blandit, risus urna interdum nisl, eu tempor libero arcu ac lorem. Pellentesque commodo imperdiet vulputate. Ut ullamcorper mauris massa. Mauris pharetra nisi at tortor ullamcorper finibus. Etiam ac arcu ut arcu suscipit placerat quis sed sapien. Nulla elementum sem eget tortor sollicitudin, euismod ultrices sapien volutpat.
            </p>
            <button className="project-button">Learn More</button>
          </div>
          {/* right */}
          <div className="right">
            <img src={Image}/>
          </div>
        </div>
        {/* project2 */}
        {/* <div className="project2">

          <div className="left">
            <img src=""/>
          </div>

          <div className="right">

          </div>
        </div> */}
      </div>
    )
  }
}


export default Portfolio2;
