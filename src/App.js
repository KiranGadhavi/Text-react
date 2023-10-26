// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

  function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }

  }
  return (
<>
  <Navbar title='Text-react' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
  <TextForm heading='Enter text below to Analyze' mode={mode}/>
  <About mode={mode} />
     {/* <Navbar title='Text-react' /> */}
    {/* <Navbar/>*/}
   </>  
   );
}

export default App;
