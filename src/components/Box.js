
import React, {useState} from 'react';

const Box = props => {
    console.log(props.color)
    
    const boxStyle = {
        backgroundColor: props.color,
        height: '100px',
        width: '100px'
    };

    return (
        <div style={boxStyle}>
        </div>
    )
}

export default Box;