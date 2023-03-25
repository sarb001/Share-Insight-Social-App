import React from 'react'

const Profile = () => {
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
                        <span> ramesh verma   </span>
                        <div> 
                          <span> 40 posts </span>
                          <span> 40 followers </span>
                          <span> 40 following  </span>
                        </div>
                    </div>
                </div>

                <div className="second-side-profile" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-between',paddingTop:'40px'}}> 
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                     <span style = {{margin:'2%'}}>
                       <img src = "/photo-1.avif" style = {{width:'160px',height:'160px',objectFit:'cover'}} />
                     </span>
                      
              </div>
          </div>
    </div>
  )
}

export default Profile