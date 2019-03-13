import React, { Component } from 'react'
import './../styles/Projects.css'
import Project from './Project'

class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className="title">My Projects</h1>
                <Project />
            </div>
        )
    }
}

export default Projects
