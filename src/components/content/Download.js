import React, { Component } from 'react'
import './../styles/Download.css'
import resume from './../../data/resume.pdf'

class Download extends Component {
    render() {
        return (
            <button type="submit" className="download-button"><a href={resume} download>Download my resume</a></button>
        )
    }
}

export default Download
