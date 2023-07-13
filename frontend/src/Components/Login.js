import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import  { toast } from  'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("")
   const navigate = useNavigate("");

   const {state,dispatch} = useContext(UserContext);

  const  logindata = async(e) => {
    e.preventDefault();

    if(!email || !password){
      toast.warn(' Please Fill all the Fields ')
    }
    try
    {
      const config = {
        headers : { 'Content-type' : 'application/json' }, 
      }

      const {data} = await  axios.post('https://socialmedia-backend-piwi.onrender.com/login', {
        email ,password},config);
        
        // console.log(' Dataa is - ',data)
        localStorage.setItem('jwt',data.token)
        localStorage.setItem('user',JSON.stringify(data.user))
        dispatch({type:"USER",payload : data.user})
        toast.success(' Successfully LoggedIn ')
        navigate('/');

    }catch(error)
     {
       toast.error(' Wrong Credentials ')
     }
  }

  const handletestlogin = () =>{
    setemail('testuser@gmail.com');
    setpassword('testuser');
  }

  return (
    
    <div> 
          <div className = "container-main" >
                <div className = "login-side" >
                      
                        <div className = "first-part" >
                            <span style = {{fontSize:'28px'}}>
                                <p>  <b>  Share your  </b> Insights </p>
                                <b>  Grow with the Community </b>
                            </span>
                        </div>

                        <div className = "second-part">
                                <div className="main-login-form">

                                      <form id = "main-form"  onSubmit = {logindata}>
                                        <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'8% 8%'}}> 
                                         <label>  Email </label>
                                        <input type = "email"      placeholder = 'Enter your Email... '   
                                         value = {email} onChange = {(e) => setemail(e.target.value)}  required/>
                                        </span>

                                        <span  style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'8% 8%'}}>  <label> Password </label>
                                        <input type = "password"   placeholder = 'Enter your Password... ' 
                                         value = {password} onChange = {(e) => setpassword(e.target.value)}  required/>
                                        </span>
                                        
                                        <span id = "login-btn"> <button style = {{backgroundColor:'black',padding:'3% 5%',color:'white'}}>  
                                        Login Here </button> </span>

                                        <span id = "login-testing-user"> 
                                        <button   onClick = {handletestlogin}  style = {{backgroundColor:'black',padding:'3% 5%',color:'white'}}>  
                                        Login as Test User  </button> </span>

                                        <span id = "signup-link"> 
                                          <Link to = "/signup"> Create New Account ? SignUp </Link> </span>
                                      </form>
                                </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Login