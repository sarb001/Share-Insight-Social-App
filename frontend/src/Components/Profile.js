import React, { useContext, useEffect ,useState } from 'react'
import axios from 'axios';
import { UserContext } from '../App';

const Profile = () => {

   const [pics,setpics] = useState([]);
   const {state,dispatch} = useContext(UserContext);

  useEffect(() => {
    const config = {
      headers : {
        "Content-Type"  : "application/json",
        'Authorization' : "Bearer " + localStorage.getItem('jwt')
      }
    }
   
    axios.get('/mypost',config)
    .then(res => { console.log(' My Post is---',res.data.mypost)
      setpics(res.data.mypost)
    })
},[])

  


  return (
    <div style = {{marginTop:'85px'}}>
          <div className = "main-profile" style = {{maxWidth:'550px',margin:'0px auto'}}>

                <div className="first-side-profile" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}> 
                    
                    <div className = "profile-pic" style = {{paddingTop:'8px'}}>
                      <span>  <img src = "/photo-1.avif"
                        style = {{width:'160px',height:'160px',borderRadius:'80px',objectFit:'cover'}} />
                      </span>
                    </div>

                    <div className = "profile-data" style = {{textAlign:'center',alignSelf:'center'}}>
                        <span> {state ? state.name : "Loading..."} </span>
                        <div> 
                          <span> { pics ? pics.length : "No Photo present" } posts </span>
                          <span>  {state? state.followers?.length : "0"  }  followers </span>
                          <span>  {state? state.following?.length : "0"  }   following  </span>
                        </div>
                    </div>
                </div>

                <div className="second-side-profile" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',paddingTop:'40px'}}> 
                      {pics.map(item => {
                        return (
                          <>
                           <span style = {{margin:'1%'}}>
                               <img src = {item.photo} style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                            </span>
                          </>
                         )
                      })}

              </div>
          </div>
    </div>
  )
}

export default Profile