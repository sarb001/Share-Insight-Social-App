import React, { useContext, useEffect, useState } from 'react'
import  { Card ,CardBody ,Image ,Stack ,Heading ,Text  , 
 Divider ,CardFooter , ButtonGroup , Button, Input 
}from '@chakra-ui/react'
import { UserContext } from '../App';
import axios from 'axios';


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


  return (
    <>
        <div style = {{marginTop:'90px',display:'flex',flexWrap:'wrap',padding:'3%',justifyContent:'space-between'}}> 
              

                   {data?.map(item => {
                    return(
                      <>
                             <Card maxW = 'sm' key = {item._id}>

                             <CardBody>
                                 <Heading size='md'>  {item?.postedBy?.name} </Heading>
                               <Image
                                 src = {item?.photo}
                                 alt='Green double couch with wooden legs'
                                 borderRadius='lg'
                               />
                                       <Stack mt='6' spacing='3'>
                                         
                                 <Text>  Title - {item.title} </Text>
                                 <Text>  Desc - {item.body} </Text>
                                   
                                   </Stack>
                             </CardBody>
                             
                                 <Divider />
   
                      <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'> Like 
                                </Button>
                                      
                                <Stack spacing={3}>
                                    <Input  variant= 'flushed'  placeholder='Write Comment....' 
                                    size='sm' />
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