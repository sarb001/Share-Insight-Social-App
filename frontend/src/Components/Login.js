import React from 'react'
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
                            <Form   onSubmit = {handlelogin}   style = {{border:'1px solid black',padding:'8%'}}>
                          
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

                            </Form>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Login