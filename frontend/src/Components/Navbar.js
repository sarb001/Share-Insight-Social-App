import React ,  { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const [showmediaicons,setshowmediaicons] = useState(false);

  return (
    <div>
                <div className = "navbar-main">
                      <div className = "nav-first">  <span id = "logo-text" > Insight App </span>   </div>
                      <div className =  {showmediaicons ? "nav-second mobile-menu-link" :  "nav-second"} > 
                          <div> <Link to = "/signup"     style = {{textDecoration:'none'}}> Signup  </Link>  </div>
                          <div> <Link to = "/login"      style = {{textDecoration:'none'}}> Login  </Link>  </div>
                          <div> <Link to = "/profile"    style = {{textDecoration:'none'}}> Profile </Link>  </div>
                      </div>

                          <div  id = "hamburger-logo"  >
                            <span id = "click-logo"  onClick = {() => setshowmediaicons(!showmediaicons)}> 
                              <GiHamburgerMenu />  
                            </span> 
                          </div>
                </div> 
    </div>
  )
}

export default Navbar