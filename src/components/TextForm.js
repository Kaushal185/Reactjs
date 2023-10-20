import React, { useState } from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
  }
  const handleOnChange = (event)=>{
    //In this method we used event handling mechanism
    // for each text written in textarea the event is triggered and it perform action inside this function.
    // the event used here is onChange
    console.log("handle on change called");
    setText(event.target.value);
    console.log(text);
  }
  const[text,setText] = useState('Enter text here');
  // text = 'new Text'; wrong way to change text
  // setText('new Text'); correct way
  return (
   <div>  
     <h1>{props.heading}</h1>
    <div className ="mb-3">
      <textarea className = "form-control" id = "myBox" onChange={handleOnChange} value={text} rows = "8"></textarea>
    </div>
    <button className = "btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
