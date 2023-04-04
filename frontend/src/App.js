import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Route ,Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialState, reducer } from './Components/Reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import Reset from './Components/Reset';
import { useLocation } from 'react-router-dom';

export const UserContext = createContext();

const Routing = () => {


   const location = useLocation();
   const navigate = useNavigate();
   const {state,dispatch} = useContext(UserContext);

  useEffect(() => {
    const user  =  JSON.parse(localStorage.getItem('user'))
    console.log('for main app',user);
        if(user){
           dispatch({type:"USER",payload:user})
          //  navigate('/')
        }else{
          if(!location.pathname.startsWith('/reset')){
            navigate('/login')
          }
        }
  },[])

  return(
   <>
      <Routes>
         <Route exact path = "/"   element = {<Home />}  >  </Route>
         <Route  path = "/signup"  element = {<Signup />} >  </Route>
         <Route  path = "/login"   element = {<Login />}>     </Route>
         <Route  path = "/reset"   element = {<Reset />}>     </Route>
         <Route path = "/profile"  element = {<Profile />}>    </Route>
         <Route path = "/profile/:userid"  element = {<UserProfile />}>    </Route>
         <Route path = "/createpost"  element = {<CreatePost />}>    </Route>
     </Routes>
   </>
  )
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div className="App">
      <UserContext.Provider value = {{state,dispatch}}>
        <ToastContainer autoClose = {1000} />
           <Navbar  />
            <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;
