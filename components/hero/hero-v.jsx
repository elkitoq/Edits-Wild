import {Box, Stack, Text, Button} from '@chakra-ui/react'
import WaveHero from '../illustration/wave-hero'

export function HeroVertical(){
  return (
    <Box position={'relative'}>
        <Box bgImage={`url('/basketball-heading.jpg')`}
          bgRepeat={{base:"no-repeat", md: 'round'}}
          height={'100vh'}
          width={'100%'}
          objectFit={'cover'}
        >
          <Stack
            width={'100%'}
            height={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'20px'}
          >
            <Text
              as={'h1'}
              color={'white'}
              fontSize={{base:'32px',md: '50px',xl: '72px', '2xl':'72px'}}
              fontWeight={'600'}
              w={{base: '80%', md: '80%', xl:'55%', '2xl':'40%'}}
              textAlign={'center'}
            >
              Creando tu puerta a la profesionalidad
            </Text>
            <Button
              as={'a'}
              _hover={{bgColor: '#303030',color: 'white',outline: {base: '2px solid #e7de26', '2xl': '3px solid #e7de26'}}}
              _focus={{bgColor: '#303030'}}
              w={{base: '50%',md:'40%', xl:'20%', '2xl':'12%'}}
              bgColor={'#e7de26'}
              color={'#000'}
              fontSize={{base:'22px', '2xl': '28px'}}
              marginTop={'10px'}
              p={{base:6, '2xl': 8}}
              href={'/#contact'}
            >
              Contactanos
            </Button>
          </Stack>
        </Box>
        <Box position={'absolute'} width={'100%'} bottom={0}>
          <WaveHero/>  
        </Box>   
    </Box>
  )
}
