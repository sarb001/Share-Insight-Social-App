import React from 'react'
import  { Card ,CardBody ,Image ,Stack ,Heading ,Text  , 
    Divider ,CardFooter , ButtonGroup , Button, Input, FormLabel 
   }from '@chakra-ui/react'
   
const CreatePost = () => {
  return (
    <div style = {{marginTop:'10%'}}> 
            <div className ="main-card" style= {{display:'flex',justifyContent:'space-around'}}>
                
                    <Card maxW = 'sm' >
                <CardBody>
                             <Heading size='md'> 
                            <Stack spacing={3}>
                                <Input  variant= 'flushed' 
                                placeholder = 'Write  Title....' size='sm' />
                            </Stack>
                            <Stack spacing={3}>
                                <Input  variant= 'flushed' 
                                placeholder = 'Write  Body...'   size='sm' />
                            </Stack>
                             </Heading>

                                <Text style  = {{paddingTop:'5%'}}>
                                <Input   type = "file"  />
                                </Text>
                 </CardBody>

                    <Divider />

                        <CardFooter>
                                <Button  variant = 'solid' colorScheme = 'teal'>  
                                  Submit Post 
                                </Button>
                        </CardFooter>
                    </Card>

            </div>
    </div>
  )
}

export default CreatePost