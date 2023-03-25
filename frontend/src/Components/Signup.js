import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div  id = "signup-main" > 
           <div className = "container-main" >
                  <div className = "signup-side">
                        
                        <div className = "first-part" >
                                  <span style = {{fontSize:'28px'}}>
                                  <p>  <b>  Share your  </b> Insights </p>
                                  <b>  Grow with the Community </b>
                                  </span>
                        </div>

                          <div className = "second-part">
                                    {/* <Form style = {{border:'1px solid black',padding:'8%'}}>

                                                  <Form.Group className="mb-3" controlId = "formBasicName">
                                                    <Form.Label style = {{display:'grid',textAlign:'start'}}> Name </Form.Label>
                                                    <Form.Control type="text"  value = {name}  placeholder="Enter Name" 
                                                    onChange = {(e) => setname(e.target.value)}    required />
                                                  </Form.Group>

                                                <Form.Group className = "mb-3" controlId = "formBasicEmail">
                                                  <Form.Label style = {{display:'grid',textAlign:'start'}}> Email address </Form.Label>
                                                  <Form.Control type="email"  value = {email} placeholder="Enter email" 
                                                  onChange = {(e) => setemail(e.target.value)}   required/>
                                                </Form.Group>

                                              <Form.Group className="mb-3" controlId = "formBasicPassword">
                                                <Form.Label style = {{display:'grid',textAlign:'start'}} > Password </Form.Label>
                                                <Form.Control type="password" value = {password} placeholder="Enter Password" 
                                                onChange = {(e) => setpassword(e.target.value)}   required/>
                                              </Form.Group>

                                              <Form.Group className="mb-3" controlId = "formBasicPassword">
                                                <input   type = "file"     onChange = {(e) => setimage(e.target.files[0])}/>
                                              </Form.Group>

                                                <button variant = "primary" type = "submit" 
                                            style  = {{width:'100%'}} onClick = {() => postdata()}>  Submit  
                                            </button>

                                                <div style = {{paddingTop:'5%'}}> 
                                                  <Link to = "/login" style = {{textDecoration:'none'}} > Have an Account ? Login  </Link> 
                                              </div>
                                    </Form> */}

                                     <div className="main-form">
                                          <form  id = "signup-form">

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label>  Name </label>
                                              <input type = "text"       placeholder = 'Enter your Name... '/>
                                              </span>

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label>  Email </label>
                                              <input type = "email"       placeholder = 'Enter your Email... '/>
                                              </span>

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label> Password </label>
                                              <input type = "password"   placeholder = 'Enter your Password... '/>
                                              </span>
                                              
                                              <span style = {{paddingTop:'5%'}}> 
                                              <button type = "submit" style = {{backgroundColor:'black',padding:'3% 5%',color:'white'}}> 
                                              SignUp </button>  </span> 
                                              <span>
                                                <Link to = "/login"> Have an Account? Login  </Link>  
                                              </span> 
                                          </form>
                                      </div>   
                          </div>
                  </div>
          </div> 
    </div>
  )
}

export default Signup