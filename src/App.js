import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About'
import Textform from './Components/Textform';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



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

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }
  
  const toggleMode =() => {
    // document.body.classList.add('bg-'+cls)
    // removeBodyClasses()
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

    <Router>
      
    <Navbar title="React" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
        {/* https://v5.reactrouter.com/web/guides/quick-start */}
        <div className="container my-3">
          <Routes> 
              <Route path="/about" element={<About mode={mode}/>} />
              <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode} />} />
          </Routes>
        </div>

    </Router>
    </>
  );
}

export default App;
