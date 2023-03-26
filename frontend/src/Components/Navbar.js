import React ,  { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { UserContext } from '../App';

const Navbar = () => {

  const {state,dispatch} = useContext(UserContext); 
  const [showmediaicons,setshowmediaicons] = useState(false);

  const renderList = () => {
    if(state){
      return [
        <li> <Link to = "/profile"> Profile  </Link>    </li>,
        <li> <Link to = "/createpost"> Create Post </Link>    </li>
      ]
    }else{
       return [
        <li> <Link to = "/login"> Login </Link>  </li>,
        <li> <Link to = "/signup"> Signup </Link>  </li>
       ]
    }
  }

  return (
    <div>
                <div className = "navbar-main">

                      <div className = "nav-first">  <span id = "logo-text" > 
                       <Link  to = {state? "/" : "/signup"}>   Insight App   </Link>   
                      </span>   </div>
                      <div className =  {showmediaicons ? "nav-second mobile-menu-link" :  "nav-second"} > 
                            {renderList()}
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