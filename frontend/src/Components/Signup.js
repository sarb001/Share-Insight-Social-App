import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';
import  { toast } from  'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");
  const navigate = useNavigate();

  const [pic,setpic] = useState("");
  const [image,setimage] = useState("");
  const [url,seturl] = useState("");


  const  uploadpic = () => {

    const data = new FormData();

    data.append("file",image)
    data.append("upload_preset","Insight-Social-Media-App")
    data.append("cloud_name" ,"damnzg3hr")

    axios.post('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload',data)
    .then((res) => {
        console.log('Image is -- ',res.data.url);
        seturl(res.data.url)
      }).catch((err) => {
        toast.error(' Error While Uploading Image ')
        console.log('Image Error  -- ',err);
   })
  }

  const uploadfield = () => {

    if(!name ||!email || !password){
      toast.warn(' Please Fill All Fields ');
      return;
    }

      try{
      const config = {
        headers: { 'Content-type' : 'application/json' }, 
      }

    const { data }  = axios.post('/signup' , 
     {name,
      email,
      password,
      pic:url 
    },config)
    console.log(' Inside UploadField --',data);
    toast.success(' User is registered Successfully ')
    navigate('/login');

      }catch(error)
      { 
        toast.error(' Something Went Wrong ')
      }
  }

  const postdata = () => {
        if(image){
          uploadpic();
        }else{
          console.log(' Start Field --')
          uploadfield();
        }
      }
      
      useEffect(() => {
        if(url){
        console.log(' Inside useEffect Field --')
         uploadfield();
      }
        },[url])


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
                                    
                                     <div className="main-form">
                                          <form  id = "signup-form">

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label>  Name </label>
                                              <input type = "text"       placeholder = 'Enter your Name... '  
                                              onChange = {(e) => setname(e.target.value)}  value= {name}  required/>
                                              </span>

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label>  Email </label>
                                              <input type = "email"       placeholder = 'Enter your Email... ' 
                                              onChange = {(e) => setemail(e.target.value)}  value= {email}   required />
                                              </span>

                                              <span style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'5% 1%'}}> <label> Password </label>
                                              <input type = "password"   placeholder = 'Enter your Password... ' 
                                              onChange = {(e) => setpassword(e.target.value)}  value= {password}   required/>
                                              </span>

                                              <span>
                                                <input type = "file"   onChange = {(e) =>  setimage(e.target.files[0])} />
                                              </span>
                                              
                                              <span style = {{paddingTop:'5%'}}> 
                                              <button type = "submit" style = {{backgroundColor:'black',padding:'3% 5%',
                                              color:'white'}}  onClick = {() => postdata()} > 
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