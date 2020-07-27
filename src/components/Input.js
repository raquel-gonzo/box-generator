
import React, { useState } from 'react';

const Input = props => {
    const [color, setColor] = useState("");

    return (
        <div>
            <label>Color: </label>
            <input></input>
            <button>Add</button>
        </div>

    )
}

export default Input;