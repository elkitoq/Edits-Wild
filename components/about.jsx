import { Box, Container, Heading, Stack, Text} from "@chakra-ui/react";
import PeopleSvg from "./illustration/people";
import WavePeople from "./illustration/wavePeople";


export function About(){
  return (
    <Container id={'about'} maxW={'full'} bgColor={'rgb(51 76 131)'} position={'relative'} p={0}>
        <Box p={16}>
            <Heading 
              p={4}
              as='h2'
              color={'white'}
              fontSize={{base:'24px',md:'28px' , xl:'38px' , '2xl': '42px'}}
              noOfLines={1}
              textAlign={'center'}
            >
              Sobre Nosotros
            </Heading>
        </Box>
        <Stack
          direction={'row'}
          justifyContent={'center'}
          maxW={'11x1'}
          alignItems={'center'}
          marginTop={0}
          spacing={16}
          p={{base:'0 0 230px 0', small: '0 0 100px 0',xl: '0 0 230px 0', '2xl': '0 0 230px 0'}}
        >
          <Stack
           direction={'row'}
           justifyContent={'center'}
           w={{base:'98%', xl:'40%', '2xl': '40%'}}
           position={{base: 'absolute', xl:'static', '2xl': 'static'}}
          >
            <PeopleSvg />
          </Stack>
          <Stack
            w={{base: '100%', xl: '40%', '2xl': '40%'}}
            m={'auto'}
            spacing={3}
            color={'white'}
            fontWeight={400}
            pb={10}
          > 
            <Text fontSize='31px' w={'80%'} >
              Somos una empresa que se dedica a la creacion de contenido para deportistas profesionales de Argentina y el resto del mundo.            
            </Text>
            <Text fontSize='31px' w={'80%'}>
              Nuestro contenido se basa en videos compilados de jugadores, en donde se encuentran sus mejores jugadas o momentos, ademas de la edicion de fotos.
            </Text>
          </Stack>
        </Stack>
        <Box position={'absolute'} bottom={0} width={'100%'}>
          <WavePeople />
        </Box>
    </Container>
  )
}