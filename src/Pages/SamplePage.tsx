import React from 'react';
import { useState } from 'react';
import '../App.css';
// import Wheel from '../Components/Wheel/Wheel';
import Canvas from '../Components/Canvas';


function SamplePahina() {
  const [message, setMessage] = useState('');
  const [textAreaText, setTextAreaText] = useState('')
  const REACT_VERSION = React.version;
  
  
  const changeText = (message:string) => {setMessage(textAreaText); console.log(message)};
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTextAreaText(event.target.value);
  };

  return (
    <div className="SamplePahina">
          Here Be SamplePahina Soon.
          {/* <Wheel /> */}
          <div>React version: {REACT_VERSION}</div>
          <div>
            <textarea 
            onChange={handleChange}
            value={textAreaText}/>
            <button  onClick = {function(){ changeText(message)}}
            name = "Update">
              CLICK ME
            </button>
          </div>
          <Canvas 
              nameString={message}
              i = {1}
              arc = {0}
              rad= {0}
          />
    </div>
  );
}

// function func1(message:string){
//   console.log(message);
// }

// function func2(this: any, message:string){
//   this.changeText(message);
// }


export default SamplePahina;
