import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Aboutme from './components/aboutme';
import Portfolio from './components/portfolio';
import Portfolio2 from './components/portfolio2';
import Contact from './components/contact';
import Skills from './components/skills'




class App extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Layout>
                <Header transparent title="Jae Moon" style={{color: 'white'}}>
                    <Navigation>
                        <a href="#skills">Technical Skills</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </Navigation>
                </Header>
                <Drawer title="Jae Moon">
                    <Navigation>
                        <a href="#aboutme">About Me</a>
                        <a href="#skills">Technical Skills</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </Navigation>
                </Drawer>
                <Aboutme/>
                <Skills/>
                <Portfolio2 />
                <Contact/>
            </Layout>
      </div>
    );
  }
}

export default App;
