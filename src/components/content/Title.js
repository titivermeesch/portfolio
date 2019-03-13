import React from 'react';
import './../styles/titles.css'

const Title = (props) => {
    return (
        <div className="superTitle">
            <strong>{props.content}</strong>
        </div>
    )
}

export default Title;
