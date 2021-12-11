import './Appa.css';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextUtilsForm from './components/TextUtilsForm';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from 'react-router-dom';
import React,{useState} from 'react'
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const [colors, setcolors] = useState("black")
  
  const showAlert=(messgae,type)=>{
      setAlert({
        messgae : messgae,
        type : type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const removeBodyclass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode=(element)=>
  {
    removeBodyclass();
    document.body.classList.add('bg-'+element);
    if(mode==='light')
    {
    setMode('dark');
    //document.body.style.backgroundColor='#909699';
    document.body.style.backgroundColor=colors;
    document.title='TextUtils - Darkmode'
    showAlert("Dark mode has been enable","success");

    setInterval(() => {
    document.title='TextUtils - Darkmode'
        }, 1000);
    
    setInterval(() => {
      document.title='Install now'
          }, 1500);
      
        }
    else 
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enable","success");
    document.title='TextUtils - Lightmode';
    }
  }
    const HandleOnChnage=(event)=>{
      setcolors(event.target.value);
      console.log(event.target.value);
      
      //console.log("Click on chnage event");
  }

  return (
    <> 
     <Router>
   
   <Navbar mode={mode} toggleMode={toggleMode} HandleOnChnage={HandleOnChnage} colors={colors}/>
   <Alert alert={alert}></Alert>
   <div className="container my-3" >
       
        <Routes>
         <Route exact path='/Abouts' element={<Abouts mode={mode}/>} />
         <Route  exact path='/'element={
          <TextUtilsForm heading="Enter The Text to ananlyze below"  mode={mode} showAlert={showAlert} />
         }>
          
          </Route>
        </Routes>
       
   </div>
   
   </Router>
   </>
  );
}
export default App;
