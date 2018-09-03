import React, { Component } from 'react';
import Typist from 'react-typist';
import Movie from '../bg.mp4'


class Aboutme extends Component {
  render() {
    return(
      <div id="aboutme">
        <header class="v-header container">
          <div class="fullscreen-video-wrap">
            <video src={Movie} autoplay="true" loop="true" muted="true"></video>
          </div>
          <div class="header-overlay"></div>
          <div class="header-content">
            <h1 className="aboutme-title">Hi, I'm Jae</h1>
            <Typist>
              I'm a CS major from University of Michigan
            </Typist>
            <button className="resume-button">Download my resume</button>
          </div>

        </header>
      </div>
    )
  }
}

export default Aboutme;
