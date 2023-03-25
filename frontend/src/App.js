import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const Routing = () => {
     return(
      <>
         <Routes>
            <Route exact path = "/"   element = {<Home />}  >  </Route>
            <Route  path = "/signup"  element = {<Signup />} >  </Route>
            <Route  path = "/login"   element = {<Login />}>     </Route>
            <Route path = "/profile"  element = {<Profile />}>    </Route>
            <Route path = "/createpost"  element = {<CreatePost />}>    </Route>
        </Routes>
      </>
     )
  }


  return (
    <div className="App">
      <ToastContainer autoClose = {1000} />
        <Navbar  />
          <Routing />
    </div>
  );
}

export default App;
