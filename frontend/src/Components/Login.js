import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
                            {/* <Form   onSubmit = {handlelogin}   style = {{border:'1px solid black',padding:'8%'}}>
                          
                                  <Form.Group className = "mb-3" controlId = "formBasicEmail">
                                  <Form.Label style = {{display:'grid',textAlign:'start'}}> Email address </Form.Label>
                                  <Form.Control type="email" placeholder="Enter email"  
                                    value = {email}     onChange = {(e) => setemail(e.target.value)}  />
                                  </Form.Group>

                                <Form.Group className="mb-3" controlId = "formBasicPassword">
                                <Form.Label style = {{display:'grid',textAlign:'start'}} > Password </Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"  
                                  value = {password}     onChange = {(e) => setpassword(e.target.value)} />
                                </Form.Group>
                        
                                <button variant = "primary" type = "submit" style  = {{width:'100%'}}> 
                                  Login  
                                </button>
                                  <div style = {{paddingTop:'5%'}}>  
                                      <Link to = "/signup" style = {{textDecoration:'none'}} >
                                        Don't have an Account ? SignUp  </Link> 
                                  </div>

                            </Form> */}

                                <div className="main-login-form">

                                      <form id = "main-form" >
                                        <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'8% 8%'}}> 
                                         <label>  Email </label>
                                        <input type = "email"      placeholder = 'Enter your Email... '/>
                                        </span>

                                        <span  style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'8% 8%'}}>  <label> Password </label>
                                        <input type = "password"   placeholder = 'Enter your Password... '/>
                                        </span>
                                        
                                        <span id = "login-btn"> <button style = {{backgroundColor:'black',padding:'3% 5%',color:'white'}}>  
                                        Login Here </button> </span>
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