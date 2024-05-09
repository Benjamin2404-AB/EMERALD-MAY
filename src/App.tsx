import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/800.css";


function App() {


  return(
    <div className="App">
      
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>
      </Router>
     
      
      
      
    </div>

  ) ;
} 
 


export default App;