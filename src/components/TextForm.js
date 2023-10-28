import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log('Uppercase was clicked'+ text);
       // setText('You have clicked on handleUpClick')
       let newText=text.toUpperCase();
        setText(newText)   
        props.showAlert("Converted to uppercase","success");
    }
    const handlelwClick=()=>{
        let lowText=text.toLowerCase();
        setText(lowText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClick=()=>{
        let clearText='' ;
        setText(clearText);  
        props.showAlert("Text has been cleared","success");              
    }
    const handleCopy=()=>{
     let text=document.getElementById('myBox');
            text.select();
      navigator.clipboard.writeText(text.value); 
      props.showAlert("Copied to clipboard","success");        
  }
  const handleSpace=()=>{
    let textSpace=text.split(/[ ]+/);
    setText(textSpace.join(' '));
    props.showAlert("Extra spaces removed","success");

 }
    const handleOnChange=(event)=>{
        //console.log('On Change');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   // const [msg, setMsg] = useState('');
   // Text='new text';//Incorrect way to change the state
   // setText('new text');//correct way to change the state
   // console.log('')
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
     <h1 >{props.heading}</h1>
  <div className="mb-3">
<textarea className='form-control' value= {text} onChange={handleOnChange} id='myBox' rows='8' style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  </div> 
  <button  className="btn btn-success mx-2" onClick={handleUpClick}>Convert to upper case</button>
  <button  className="btn btn-success mx-2" onClick={handlelwClick}>Convert to lower case</button>
  <button  className="btn btn-success mx-2" onClick={handleClick}>Clear Text</button>
  <button  className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
  <button  className="btn btn-success mx-2" onClick={handleSpace}>Remove Extra space</button>
</div>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>Text Summary</h3>
   <p>{text.split(' ').length} words and {text.length} characters</p> 
    <p>{0.008*text.split(' ').length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
</div>
</>
  )
}
