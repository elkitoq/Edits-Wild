import { AspectRatio, Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import WaveFeature from "./illustration/wave-feature";

export function Feature(){
  return (
    
    <Container id={'features'} maxW={'full'} bgColor={'#d3d1eb'} position={'relative'} p={0} height={{base:'900px', md:'1600px', xl:'800px', '2xl': '950px'}}> 
    <Heading paddingY={{base:8, md: 14, xl: 14 ,'2xl': 14}} as='h2' fontSize={{base:'28px',md:'28px' , xl:'38px' , '2xl': '42px'}} noOfLines={1} textAlign={'center'}>Algo de nuestro trabajo!</Heading>
    <SimpleGrid columns={{base: 1, md: 1 ,xl: 2}} maxW={'11x1'} alignItems={'center'} marginTop={4} spacingY={10}>
      <Box >
        <AspectRatio m={'auto'} maxW={{base: '80%',xl:'560px','2xl': '780px'}} ratio={1} height={{xl:'500px', '2xl': '600px'}} bgColor={'transparent'}>
          <iframe
            src="https://www.youtube.com/embed/KB9dso-h_Es"
            title="YouTube video player"
            allowfullscreen />
        </AspectRatio>
      </Box>
      <Box >
        <AspectRatio m={'auto'} maxW={{base: '80%', xl:'560px','2xl': '780px'}} height={{xl:'500px', '2xl': '600px'}} ratio={1} bgColor={'transparent'}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </SimpleGrid>
    <Box position={'absolute'}  width={'100%'} bottom={0}>
      <WaveFeature />
    </Box>
  </Container>
  )
}

