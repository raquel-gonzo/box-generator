
import React from 'react';

const Box = props => {
    console.log("this is props");
    console.log(props);
    
    const boxStyle = {
        display: "inline-block",
        margin: "4px",
        backgroundColor: props.color,
        height: '100px',
        width: '100px'
    };

    return (
        <span style={boxStyle}>
        </span>
    )
}

export default Box;