// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";


  function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enable or not
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")
     // document.title='Text-react- Dark mode';//change tab tittle content
      // setInterval( ()=>{
      //   document.title='Text-react is an amazing mode'
      // },2000);
      // setInterval( ()=>{
      //   document.title='Install Text-react now'
      // })
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success")
     
     // document.title='Text-react- Light mode';
    }

  }
  return (
<>
    {<Router>
      <Navbar title='Text-react' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>      
       <Route exact path="/about" element={<About mode={mode}/>} />
       <Route exact path="/" element={
       <TextForm showAlert={showAlert} heading='Try Text-react - Word Counter Character Counter Remove extra spaces' mode={mode}/>}/>
      </Routes>
    </Router>} 
     {/* <Navbar title='Text-react' /> */}
    {/* <Navbar/>*/}
   </>  
   );
}

export default App;
