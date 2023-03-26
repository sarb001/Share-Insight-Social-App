import React, { useContext, useEffect , useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';


const UserProfile = () => {

     const [userprofile,setuserprofile] = useState(null);
      const { userid } = useParams();
    const {state,dispatch} = useContext(UserContext);

    useEffect(() => {
        loadata();
    })
  
    const loadata = async() => 
    {
      const config = {
        headers : {
            "Content-Type"  : "application/json",
            'Authorization' : "Bearer " + localStorage.getItem('jwt')
        }
      }
  
       const getout = await axios.get(`/user/${userid}`,config)
      .then(res => {
        console.log(' Res inUserProfile is - -',res.data)
        setuserprofile(res.data);
       }).catch((err) => {
         console.log('Error in Userprofile is - ',err);
       })
    }


  return (
    <div> 
          <div className = "user-profile" style = {{marginTop:'80px'}}>
                   
            <div className = "main-profile" style = {{maxWidth:'550px',margin:'0px auto'}}>

                                <div className="first-side-profile" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}> 
                                    
                                                        <div className = "profile-pic" style = {{paddingTop:'8px'}}>
                                                            <span>  <img src = "/photo-1.avif"
                                                                style = {{width:'160px',height:'160px',borderRadius:'80px',objectFit:'cover'}} />
                                                            </span>
                                                        </div>

                                                        <div className = "profile-data" style = {{textAlign:'center',alignSelf:'center'}}>
                                                        <span>   
                                                            Name is - {userprofile?.item.name} 
                                                             </span>
                                                            <div> 
                                                                <span>  {userprofile?.posts.length}  posts </span>
                                                                <span>  40  followers </span>
                                                                <span> 40 following  </span>
                                                            </div>
                                                        </div>
                                </div>

                    <div className="second-side-profile" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',paddingTop:'40px'}}> 
                                            {userprofile?.posts.map((item) => {
                                                 return (
                                                    <>
                                                     <span> 
                                                        <img src = {item?.photo} style = {{width:'38%'}} />
                                                     </span>
                                                    </>
                                                 )
                                            })}
                    </div>
        </div>
          </div>
    </div>
  )
}

export default UserProfile