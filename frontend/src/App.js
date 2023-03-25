import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar  />
        <Routes>
            <Route exact path = "/"   element = {<Home />}  >  </Route>
            <Route  path = "/signup"  element = {<Signup />} >  </Route>
            <Route  path = "/login"   element = {<Login />}>     </Route>
            <Route path = "/profile"  element = {<Profile />}>    </Route>
            <Route path = "/createpost"  element = {<CreatePost />}>    </Route>
        </Routes>
    </div>
  );
}

export default App;
