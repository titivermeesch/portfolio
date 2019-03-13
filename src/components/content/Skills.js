import React, { Component } from 'react'
import './../styles/Skills.css'
import Skill from './Skill'

class Skills extends Component {
    render() {
        return (
            <div>
                <h1 className="title" id="Skills">
                    Skills
                </h1>
                <Skill />
            </div>
        )
    }
}

export default Skills
