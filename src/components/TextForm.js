import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log('Uppercase was clicked'+ text);
       // setText('You have clicked on handleUpClick')
       let newText=text.toUpperCase();
        setText(newText)   
    }
    const handleClick=()=>{
        let lowText=text.toLowerCase();
        setText(lowText)
    }
    const handleOnChange=(event)=>{
        //console.log('On Change');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   // Text='new text';//Incorrect way to change the state
   // setText('new text');//correct way to change the state
   // console.log('')
  return (
    <>
    <div className='container'>
     <h1 >{props.heading}</h1>
  <div className="mb-3">
<textarea className='form-control' value= {text} onChange={handleOnChange} id='myBox' rows='8'></textarea>
  </div> 
  <button  className="btn btn-success mx-2" onClick={handleUpClick}>Convert to upper case</button>
  <button  className="btn btn-success mx-2" onClick={handleClick}>Convert to lower case</button>
</div>
<div className='container my-3'>
    <h3>Text Summary</h3>
   <p>{text.split(' ').length} words and {text.length} characters</p> 
    <p>{0.008*text.split(' ').length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
  )
}
