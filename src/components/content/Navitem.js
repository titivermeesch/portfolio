import React, { Component } from 'react'
import './../styles/Navigation.css'

class navitem extends Component {
    launchScrollAnimation = () => {
        this.props.onClickFunction(this.props.scrollRef.current)
    }

    render() {
        return (
            <div>
                <div className="navItem" onClick={this.launchScrollAnimation}>
                    {this.props.dName}
                </div>
            </div>
        )
    }
}

export default navitem