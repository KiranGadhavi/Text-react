// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>
    { <Navbar title='Text-react' aboutText='About Us'/>}
 <TextForm heading='Enter text below to Analyze'/>
     {/* <Navbar title='Text-react' /> */}
    {/* <Navbar/>*/}
   </>  );
}

export default App;
