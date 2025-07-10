import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
// import About from './Components/About';
import Textform from './Components/Textform';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,  
//   Routes,
//   Route
// } from "react-router-dom";



function App() { 

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode =() => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtills - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtills - Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}

    <Navbar title="React" abouttext="" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
        {/* https://v5.reactrouter.com/web/guides/quick-start */}
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        </Routes> */}
        {/* <Route exact path="/" element={}></Route> */}
        <div className="container my-3">
          <Textform showAlert={showAlert} heading="Enter the text here" mode={mode}/>
        </div>
           

      {/* <About/> */}
    {/* </Router> */}
    </>
  );
}

export default App;
