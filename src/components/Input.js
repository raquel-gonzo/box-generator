
import React, { useState } from 'react';

const Input = props => {

    const [color, setColor] = useState("");
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        // call trim() to remove spaces
        setColor(e.target.value.trim());
        setInput(e.target);
    }

    return (
        <div>
            <label>Color: </label>
            <input id="react-input" onChange={handleChange}></input>
            <button onClick={() => props.makeBox(color, input)} >Add</button>
        </div>
    )
}

export default Input;