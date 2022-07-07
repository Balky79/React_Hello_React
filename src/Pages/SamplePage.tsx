import React from 'react';
import { useState } from 'react';
import '../App.css';
// import Wheel from '../Components/Wheel/Wheel';
import Canvas from '../Components/Canvas';


function SamplePahina() {
  const REACT_VERSION = React.version;
  const changeText = (message:string) => {setMessage(message); console.log(message)};
  const [message, setMessage] = useState('a');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  return (
    <div className="SamplePahina">
          Here Be SamplePahina Soon.
          {/* <Wheel /> */}
          <div>React version: {REACT_VERSION}</div>
          <div>
            <textarea 
            onChange={handleChange}
            value={message}/>
            <button  onClick = {function(event){ func1(message); changeText(message)}}
            name = "Update">
              CLICK ME
            </button>
          </div>
          <Canvas 
              nameString={message}
          />
    </div>
  );
}

function func1(message:string){
  console.log(message);
}

// function func2(this: any, message:string){
//   this.changeText(message);
// }


export default SamplePahina;
