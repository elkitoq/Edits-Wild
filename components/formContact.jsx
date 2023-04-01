import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export function FormContact() {

  const [infoContact , setInfoContact] = useState({nombre:'',email:'',mensaje:''})

  const handleChange = (event) => {
    setInfoContact(values => ({...values, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(infoContact.nombre.length > 2 && infoContact.mensaje.length > 2 && infoContact.email.length > 2) {
      fetch('api/contact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoContact),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res.status);
          setInfoContact({nombre:'',email:'',mensaje:''})
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }


  return (
    <VStack p={12} h={'100%'}>
        <Box padding={2} mb={6} height={'10%'}>
            <Heading as={'h3'} fontWeight={400} textAlign={'center'}>Contactanos</Heading>
        </Box>
        <Box width={'85%'} height={'85%'}>
          <Stack spacing={10} alignContent={'center'} height={'100%'} justifyContent={'space-evenly'}>
            <FormControl isRequired>
              <FormLabel>Nombre y Apellido</FormLabel>
              <Input 
                name='nombre'
                bgColor={'white'}
                placeholder='Nombre y Apellido'
                _placeholder={{textAlign:'center'}}
                onChange={handleChange}
                value={infoContact.nombre}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name='email'
                bgColor={'white'}
                type='email'
                placeholder='Email'
                _placeholder={{textAlign:'center'}}
                onChange={handleChange}
                value={infoContact.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea
                name='mensaje'
                maxH={'80px'}
                bgColor={'white'}
                placeholder='Here is a sample placeholder'
                _placeholder={{textAlign:'center'}}
                onChange={handleChange}
                value={infoContact.mensaje}
              />
              </FormControl>
            <Center>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' width={'40%'} fontSize={24} onClick={handleSubmit} minW={'130px'}>
                Send
              </Button>
            </Center>
          </Stack>
        </Box>
    </VStack>
  )
}
