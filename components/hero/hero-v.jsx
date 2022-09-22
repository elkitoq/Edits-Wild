import {Box, Stack, Text, Button} from '@chakra-ui/react'
import WaveHero from '../illustration/wave-hero'

export function HeroVertical(){
  return (
    <Box position={'relative'}>
        <Box bgImage={`url('/basketball-heading.jpg')`}
          bgRepeat="no-repeat"
          height={'100vh'}
          width={'100%'}
          objectFit={'contain'}
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
              fontSize={'72px'}
              fontWeight={'600'}
              w={'40%'}
              textAlign={'center'}
            >
              Creando tu puerta a la profesionalidad
            </Text>
            <Button
              as={'a'}
              _hover={{bgColor: '#303030',color: 'white',outline: '2px solid #e7de26'}}
              _focus={{bgColor: '#303030'}}
              w={'10%'}
              bgColor={'#e7de26'}
              color={'#000'}
              fontSize={'22px'}
              marginTop={'10px'}
              p={6}
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
