import React, { Component } from 'react'
import web from './../../data/web-certif.png'
import html from './../../data/html-certif.png'
import js from './../../data/js-certif.png'
import uml from './../../data/uml-certif.PNG'

class Certificate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            certificates: [
                {
                    id: 1,
                    name: 'Web understanding',
                    img: web
                },
                {
                    id: 2,
                    name: 'HTML',
                    img: html
                },
                {
                    id: 3,
                    name: 'CSS',
                    img: html
                },
                {
                    id: 4,
                    name: 'Javascript',
                    img: js
                },
                {
                    id: 5,
                    name: 'UML/SQL',
                    img: uml
                }
            ]
        }
    }

    render() {
        return this.state.certificates.map(({ id, name, img }) => (
            <div key={id} className="certif-holder">
                <div>{name}</div>
                <a href={img} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt="Certificate" />
                </a>
            </div>
        ))
    }
}

export default Certificate
