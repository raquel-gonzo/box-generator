
import React, { useState } from 'react';

const Input = props => {

    const [color, setColor] = useState("");

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <label>Color: </label>
            <input onChange={handleChange} ></input>
            <button onClick={() => props.makeBox(color)} >Add</button>
        </div>

    )
}

export default Input;