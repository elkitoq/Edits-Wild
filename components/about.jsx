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
              fontSize={{base:'28px',md:'28px' , xl:'38px' , '2xl': '42px'}}
              noOfLines={1}
              textAlign={'center'}
            >
              Sobre Nosotros
            </Heading>
        </Box>
        <Stack
        id={'aboutTest'}
          direction={'row'}
          justifyContent={'center'}
          maxW={'11x1'}
          alignItems={'center'}
          marginTop={0}
          spacing={{base: 0, xl: 16, '2xl': 16}}
          pb={{base: 24, md: 48, xl: 48,'2xl':48}}
        >
          <Stack
           direction={'row'}
           justifyContent={'center'}
           w={{base:'98%', xl:'40%', '2xl': '40%'}}
           position={{base: 'absolute', xl:'static', '2xl': 'static'}}
           filter={{base: 'brightness(0.4)', xl: 'none', '2xl': 'none'}}
           zIndex={1}
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
            zIndex={2}
            alignItems={'center'}
          > 
            <Text fontSize={{base:'24px',md: '28px',xl:'31px', '2xl':'31px'}} w={{base:'95%', xl:'80%'}} >
              Somos una empresa que se dedica a la creacion de contenido para deportistas profesionales de Argentina y el resto del mundo.            
            </Text>
            <Text fontSize={{base:'24px',md: '28px',xl:'31px', '2xl':'31px'}} w={{base:'95%', xl:'80%'}}>
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