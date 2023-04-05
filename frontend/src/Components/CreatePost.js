import React  , {useState , useEffect } from 'react';
import  { Card ,CardBody ,Image ,Stack ,Heading ,Text  , 
    Divider ,CardFooter , ButtonGroup , Button, Input, FormLabel 
   }from '@chakra-ui/react';
import  axios from 'axios';
   
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const [title,setTitle] = useState("");
  const [body,setbody]   = useState("");
  const [image,setimage]   = useState("");

  const [url,seturl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    if(url)
    {
      try
      { 
          const config = {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : "Bearer " + localStorage.getItem('jwt')
            }
          }

          axios.post('/createpost' , { 
              title,body,photo:url
          },config)
          .then(res => { console.log(res) })
          .catch(error => {
            toast.error(' Something Wrong in axios ');
          })
         
          toast.success(' Post is Created Successfully ')
          navigate('/')

      }catch(err)
      { 
          toast.error(' Something Went Wrong ')
      }
    }
},[url])

  const handleimagepost = async() => {

    const data = new FormData();

      data.append("file",image)
      data.append("upload_preset","Insight-Social-Media-App")
      data.append("cloud_name" ,"damnzg3hr")

     await axios.post('https://api.cloudinary.com/v1_1/damnzg3hr/image/upload',data)
     .then((res) => {
          seturl(res.data.url)
        }).catch((err) => {
          toast.error(' Error While Uploading Image ')
     })

  }


  return (
    <div style = {{marginTop:'10%'}}> 
            <div className ="main-card" style= {{display:'flex',justifyContent:'space-around'}}>
                
                    <Card maxW = 'sm' >
                <CardBody>
                             <Heading size='md'> 
                            <Stack spacing={3}>
                                <Input  variant= 'flushed'   placeholder = 'Write  Title....' size='sm' 
                                 value = {title}  onChange = {(e) => setTitle(e.target.value)}    required/>
                            </Stack> 
                            <Stack spacing={3}>
                                <Input  variant= 'flushed'   placeholder = 'Write  Body...'   size='sm'     
                              value = {body}  onChange = {(e) => setbody(e.target.value)}    required/>
                            </Stack>
                             </Heading>

                                <Text style  = {{paddingTop:'5%'}}>
                                <Input   type = "file"  onChange = {(e) =>  setimage(e.target.files[0])} />
                                </Text>
                 </CardBody>

                    <Divider />

                    <CardFooter>
                        <Button  variant = 'solid' colorScheme = 'teal'  onClick = {handleimagepost}>  
                                  Submit Post 
                                </Button>
                        </CardFooter>
                    </Card>

            </div>
    </div>
  )
}

export default CreatePost