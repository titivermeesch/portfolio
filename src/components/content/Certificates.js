import React, { Component } from 'react'
import './../styles/Certificates.css'
import Certificate from './Certificate'

class Certificates extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Certificates</h1>
                <div className="introduction">Certificates are proof of the knowledge around a subject.<br />Since I am using OpenClassrooms, I receive officiel certificates every time I complete a skill with success. Some of my skills may be perfect but don't have a certificate shown here. You can refer to my projects for that.</div>
                <div className="certificates">
                    <Certificate />
                </div>
            </div>
        )
    }
}

export default Certificates
