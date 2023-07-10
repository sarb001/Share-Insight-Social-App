import React, { useContext, useEffect, useState } from 'react'
import  { Card ,CardBody ,Image ,Stack ,Heading ,Text  , 
 Divider ,CardFooter , ButtonGroup , Button, Input 
}from '@chakra-ui/react'
import { UserContext } from '../App';
import axios from 'axios';
import  { AiFillHeart , AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {

  const [data,setdata] = useState([]);
  const {state,dispatch} = useContext(UserContext)
  // const [loading,setloading] = useState(false);

  
   useEffect(() => {

     const config = {
         headers : {
         "Content-Type"  : "application/json",
         'Authorization' : "Bearer " + localStorage.getItem('jwt')
       }
     }

      //  setloading(true);
       axios.get('/allposts' , config)
       .then(res => {  console.log(' Home All Posts ',res)
        setdata(res.data.posts)
        // setloading(false);
       })
   },[])


   const likepost = (id) => {
    try{      

      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : "Bearer " + localStorage.getItem('jwt')
          }
      }

      axios.put('/likepost' , {
        postId : id
      },config)
      .then(res => {
          console.log(' Post is Liked here - ',res)
      })
      toast.success(' Post is Liked  ')
    }catch(error)
    {
      // console.log(' Error While Liking Post is - ',error);
      toast.error(' Something Went Wrong ')
    }
  }


   const unlikepost = (id) => {
    try{      
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : "Bearer " + localStorage.getItem('jwt')
          }
      }

      axios.put('/unlikepost' , {
        postId : id
      },config)
      .then(res => {
          console.log(' Post is UnLiked here - ',res)
      })
      toast.success(' Post is UnLiked  ')
    }catch(error)
    {
      // console.log(' Error While Unliking Post is - ',error);
      toast.error(' Something Went Wrong ')
    }
  }

  
  const makecomment = (text,postId) => {
    try{      
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : "Bearer " + localStorage.getItem('jwt')
          }
      }

          axios.put('/comment' ,{
          postId,
          text
        },config)
        .then(response => {  
          console.log(' Comment  resp is  ' ,response)
        })
        toast.success(' Commented  It Here  .... ')
      
    }catch(error)
      {
          // console.log(' err  while  Comment  is -',error );
          toast.error(' Something Went Wrong')
      }
  }

  const deletepost = (postid) => {

    try{      
      const config = {
          headers : {
              "Content-Type"  : "application/json",
              'Authorization' : "Bearer " + localStorage.getItem('jwt')
          }
      }

          axios.delete(`/deletepost/${postid}`,config)
         .then(result => {  
          // console.log(' Delete data Responsee  is -' ,result)
          const newdata = data.filter(item => {      
            return item._id !== result._id
          })
          setdata(newdata)
        })
      toast.success(' Post  Deleted  ')
      
    }catch(error)
      {
          // console.log(' err  while Unlike  post is -',error );
          toast.error(' Something Went Wrong')
      }
  }



  return (
    <>
        <div style = {{marginTop:'90px',display:'flex',flexWrap:'wrap',padding:'3%',justifyContent:'space-between'}}> 
              
                   {data?.map(item => {
                    return(
                      <>
                             <Card maxW = 'sm' key = {item._id}>

                             <CardBody>
                                 <span style = {{display:'grid',gridTemplateColumns:'1fr 20px'}}>
                                  <Heading size='md'>    
                                     <Link to = {item?.postedBy?._id !== state._id ? "/profile/" + item?.postedBy?._id : "/profile/"}>
                                       {item?.postedBy?.name} </Link>        
                                   </Heading>
                                      <span style = {{fontSize:'23px',backgroundColor:'wheat',alignSelf:'center',display:'flex'}}> 
                                        { item?.postedBy?._id === state?._id && 
                                          <AiFillDelete  onClick = {() => deletepost(item?._id)} /> 
                                        }
                                      </span> 
                                 </span>
                                 <Divider />
                                
                               <Image
                                 src = {item?.photo}
                                 alt='Green double couch with wooden legs'
                                 borderRadius='lg'
                               />
                                       <Stack mt='6' spacing='3'>
                                         
                                 <Text>  Title - {item.title} </Text>
                                 <Text>  Desc -  {item.body} </Text>
                                   
                                   </Stack>
                             </CardBody>
                             
                                 <Divider />
   
                      <CardFooter>
                        <ButtonGroup spacing='2'>

                          {item.likes.includes(state._id) ? <>
                            <Button variant = 'solid' colorScheme = 'blue'  onClick = {() => unlikepost(item?._id)}> DisLike  </Button>
                          </> : 
                          <>
                            <Button variant = 'solid' colorScheme = 'blue'  onClick = {() => likepost(item?._id)} >  { item.likes.length}  Like  </Button>
                          </>}

                                      
                                <Stack spacing = {3}>
                                    {item?.comments?.map(record => {
                                      return(
                                        <span>  <b>{record?.text} - By {state?.name} </b> </span>
                                      )}
                                      )}
                                  <form onSubmit = {(e) => 
                                   {
                                     e.preventDefault();
                                     makecomment(e.target[0].value,item._id)
                                   }}>
                                    <Input  variant = 'flushed'  placeholder='Write Comment....' 
                                    size='sm' />
                                    </form>
                                </Stack>
                                
                          </ButtonGroup>
                      </CardFooter>
                             </Card>
                      </>
                    )
                   })}
        </div>
    </>
  )
}

export default Home