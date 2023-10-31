// {import React,{useState} from 'react'}
export default function About(props) {
//  { const [myStyle ,setMyStyle]=useState(
//     {
//         color: 'black',
//         backgroundColor: 'white',
//         border: '2px solid black'
//     })}
   let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark?'?'#042743':'white',
    borderColor:props.mode==='dark'?'white':'#042743',
   }
    
  return (
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743',}} >
            <h1>About Us</h1>
            <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample" >
            <div className="accordion-item" >
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
               <strong>Analyze Your test</strong> 
                </button>
            </h2>
            <div style={myStyle} id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>Text-react gives you a way to analuze your text quickly and effectively.be it word count,character count</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>Free to use</strong>
                </button>
            </h2>
            <div  id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>Text-react is afree character counter tool that provides instant character count & word count statistics for a given text.
                Text-react reports the number of words and characters, this is suitable for writting text with word/character limit</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div style={myStyle} id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={myStyle}>This word counter software works in any web browser such as Chrome ,Firefox, Internet Explore ,Safari,Opera.It suits to count character in facebook,blog,books,excel document,pdf document,essays etc</div>
            </div>
            </div>
        </div>
       {/* { <div>
        <button className='btn btn-success my-3' onClick={toggleStyle}>{btnText}</button>
        </div>} */}
       
        </div>
  )
}
