import React, { Component } from 'react'
import Navbar from './components/content/Navbar'
import Title from './components/content/Title'
import Bio from './components/content/Bio'
import Introduction from './components/content/Introduction'
import Timeline from './components/content/Timeline'
import Projects from './components/content/Projects'
import Skills from './components/content/Skills'
import Certificates from './components/content/Certificates'
import Download from './components/content/Download'
import Contact from './components/content/Contact'
import scrollToComponent from 'react-scroll-to-component';
import { Route } from 'react-router-dom'
import TextVersion from './components/content/TextVersion'

class App extends Component {

  introref = React.createRef();
  timelineref = React.createRef();
  projectsref = React.createRef();
  skillsref = React.createRef();
  certifref = React.createRef();
  resumeref = React.createRef();

  scrollAnimation = (ref) => {
    scrollToComponent(ref, { duration: 1600 });
  }

  render() {
    return (
      <div className="App">
        <Route path="/textversion" component={TextVersion} />
        <Route path="/contact" component={Contact} />
        <Navbar introref={this.introref}
          timelineref={this.timelineref}
          projectsref={this.projectsref}
          skillsref={this.skillsref}
          certifref={this.certifref}
          resumeref={this.resumeref}
          onScroll={this.scrollAnimation}
        />
        <Title content="I am Tristan Vermeesch" />
        <hr />
        <Bio />
        <Introduction ref={this.introref} />
        <Timeline ref={this.timelineref} />
        <Projects ref={this.projectsref} />
        <Skills ref={this.skillsref} />
        <Certificates ref={this.certifref} />
        <Download ref={this.resumeref} />
      </div>
    );
  }
}

export default App