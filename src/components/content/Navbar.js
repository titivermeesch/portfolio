import React, { Component } from 'react'
import Navitem from './Navitem.js'
import './../styles/Navigation.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const {
            introref,
            timelineref,
            projectsref,
            skillsref,
            certifref,
            resumeref,
            onScroll
        } = this.props
        return (
            <div className="navbar">
                <Link to="/textversion" className="link">
                    Text Version
                </Link>
                <Link to="/contact" className="link">
                    Contact
                </Link>
                <Navitem
                    dName={'Resume'}
                    onClickFunction={onScroll}
                    scrollRef={resumeref}
                />
                <Navitem
                    dName={'Certificates'}
                    onClickFunction={onScroll}
                    scrollRef={certifref}
                />
                <Navitem
                    dName={'Skills'}
                    onClickFunction={onScroll}
                    scrollRef={skillsref}
                />
                <Navitem
                    dName={'Projects'}
                    onClickFunction={onScroll}
                    scrollRef={projectsref}
                />
                <Navitem
                    dName={'Timeline'}
                    onClickFunction={onScroll}
                    scrollRef={timelineref}
                />
                <Navitem
                    dName={'Me'}
                    onClickFunction={onScroll}
                    scrollRef={introref}
                />
            </div>
        )
    }
}

export default Navbar
