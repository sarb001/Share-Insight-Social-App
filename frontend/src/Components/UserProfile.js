import React, { useContext, useEffect , useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import { toast } from 'react-toastify';

const UserProfile = () => {

     const [userprofile,setuserprofile] = useState(null);
      const { userid } = useParams();
     const {state,dispatch} = useContext(UserContext);
      const [showfollower,setshowfollower] = useState(true);

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

    const  followuser = async() => {
      const config = {
        headers : {
            "Content-Type"  : "application/json",
            'Authorization' : "Bearer " + localStorage.getItem('jwt')
        }
      }
  
       const followuserhere = await axios.put('/follow',{
         followId : userid 
       },config)
       .then(res => 
        {
          console.log(' Follow user Front is --',res.data);
          dispatch({type:"UPDATE",payload : {following : res.data.following,followers : res.data.followers}})
          localStorage.setItem("user",JSON.stringify(res.data))
          toast.success(' User has been Followed ')
          setuserprofile((prevstate) => {
             return{
              ...prevstate,
              user : {
                ...prevstate.user,
                followers :[...prevstate.item.followers,res.data._id]
              }
             }
          })
          setshowfollower(false);
        }).catch(err => {
          console.log('Error in Follow user',err);
        })
    }


    const unfollowuser = async() => {

      const config = {
        headers : {
            "Content-Type"  : "application/json",
            'Authorization' : "Bearer " + localStorage.getItem('jwt')
        }
      }
  
       const unfollowuserhere = await axios.put('/unfollow',{
         unfollowId : userid 
       },config)
       .then(res => 
        {
          console.log(' Followuser Front is --',res.data);
          dispatch({type:"UPDATE",payload : {following : res.data.following,followers : res.data.followers}})
          toast.success(' User has been Unfollowed ')
          setuserprofile((prevstate) => {
            const newFollower = prevstate.item.followers.filter(item => item != res.data._id)
            return{
             ...prevstate,
             user : {
               ...prevstate.user,
               followers : newFollower
             }
            }
         })
         setshowfollower(true);
  
        }).catch(err => {
          console.log('Error in Unfollow user',err);
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
                                                                <span>  {userprofile?.item.followers.length}  followers </span>
                                                                <span>  {userprofile?.item.following.length}  following  </span>
                                                            </div>
                                                            <div className="follow-btn">

                                                               {showfollower ? (
                                                                 <>
                                                                 <button  style = {{backgroundColor:'brown',padding:'2% 5%'}} onClick = {() => followuser()}>  Follow  </button>
                                                               </>) : (
                                                                 <>
                                                                 <button  style = {{backgroundColor:'brown',padding:'2% 5%'}} onClick = {() => unfollowuser()}>  UnFollow  </button>
                                                               </>)}
                                                            </div>
                                                        </div>
                                </div>

                                <div className = "second-side-profile" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',paddingTop:'40px'}}> 
                                                        {userprofile?.posts.map((item) => {
                                                            return (
                                                                <>
                                                                <span style  = {{margin:'2%'}}> 
                                                                    <img src = {item?.photo} style = {{width:'40%'}} />
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