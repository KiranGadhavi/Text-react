import React,{useState} from 'react'

export default function About(props) {
  const [myStyle ,setMyStyle]=useState(

    {
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid black'
    })
    const [btnText ,setBtnText]=useState('Enable Light Mode')
    const toggleStyle=() =>{
        if(myStyle.color ==='black'){
    setMyStyle({
        color: 'white',
            backgroundColor: 'black',
            border: '2px solid green'
    })
    setBtnText('Enable Light Mode');
        }
        else{
            setMyStyle({
                color: 'black',
            backgroundColor: 'White',
            border: '2px solid green'
            })
            setBtnText('Enable Dark Mode');
                }
        }
    
  return (
            <div className='container' style={{backgroundColor:props.mode==='dark'?'grey':'white',myStyle} }>
            <h1>About Us</h1>
            <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample" >
            <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
                </button>
            </h2>
            <div style={myStyle} id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
                </button>
            </h2>
            <div style={myStyle} id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
                </button>
            </h2>
            <div style={myStyle} id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
            </div>
        </div>
        <div>
        <button className='btn btn-success my3' onClick={toggleStyle}>{btnText}</button>
        </div>
       
        </div>
  )
}