import React, {useState} from 'react';
import './App.css';
import Box from './components/Box';
import Input from './components/Input';

function App() {

  const [boxes, setBoxes] = useState([]);

  // store the boxes in an array
  // in the html, render all the boxes in that array

  // adds the box to the boxes array
  const makeBox = (color) => {
    console.log("makeBox called");
    console.log(color);

    // return (
    //   <Box />
    // )
  }


  return (
    <div className="App">
      <div id='container'>
        <Input makeBox={makeBox}/>
        <Box color="red"/>
      </div>
    </div>
  );
}

export default App;
