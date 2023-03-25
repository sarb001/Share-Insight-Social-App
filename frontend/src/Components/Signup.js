import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <div> 
           <div className = "container-main" >
                  <div className = "signup-side">
                        
                        <div className = "first-part" >
                                  <span style = {{fontSize:'28px'}}>
                                  <p>  <b>  Share your  </b> Insights </p>
                                  <b>  Grow with the Community </b>
                                  </span>
                        </div>

                          <div className = "second-part">
                                    <Form style = {{border:'1px solid black',padding:'8%'}}>

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
                                    </Form>
                          </div>
                  </div>
          </div> 
    </div>
  )
}

export default Signup