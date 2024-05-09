import Logo from '../assets/em logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){
    const[toggled,setToggled] = useState(false);

    const handleToggledNavbar = () => {
        setToggled(!toggled)
    };

   

    
        
    
   
    return (
        <>
        <header>
            <div className='Navbar' id = {toggled ? "opened-nav" : ""}>
                    <img src={Logo} className='logo'/>
                    <ul>
                            <div className='tabs' id ={toggled ? "open": "closed"}>
                                <li><Link className="active"to= "/">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>

                            </div>



                            <button onClick={handleToggledNavbar} 

                                id = {toggled ? "toggledTop" : "null"}>

                                    {toggled ? <CloseIcon/>:<ReorderIcon/>}

                            </button>

                    </ul>

                    <div className="line"></div>


            </div>



        </header>
           
             
            
        
        
        </>


    );
}

export default Navbar;