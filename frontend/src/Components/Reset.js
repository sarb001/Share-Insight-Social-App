
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import  { toast } from  'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Reset = () => {

const [email,setemail] = useState("");
 const navigate = useNavigate("");

 const {state,dispatch} = useContext(UserContext);

 
  const  logindata = async(e) => {
    e.preventDefault();

    if(!email){
      toast.warn(' Please Fill all the Fields ')
    }
    try
    {
      const config = {
        headers : { 'Content-type' : 'application/json' }, 
      }

      const {data} = await  axios.post('/reset-password', {
        email},config);
        toast.success(' Check your Email ')
        navigate('/login');

    }catch(error)
     {
       toast.error(' Wrong Credentialssss ')
     }
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
                                         <label> Reset Email  </label>
                                        <input type = "email"      placeholder = 'Enter your Email... '   
                                         value = {email} onChange = {(e) => setemail(e.target.value)}  required/>
                                        </span>

                                          <span id = "login-btn"> 
                                        <button style = {{backgroundColor:'black',padding:'3% 5%',color:'white'}}>  
                                             Reset Password 
                                         </button> </span>
                                      </form>
                                </div>
                        </div>
                </div>
            </div>
    </div>
  )
  }


export default Reset