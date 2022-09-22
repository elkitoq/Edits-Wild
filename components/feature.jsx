import { AspectRatio, Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import WaveFeature from "./illustration/wave-feature";

export function Feature(){
  return (
    
      <Container id={'features'} maxW={'full'} bgColor={'#d3d1eb'} position={'relative'} p={0} height={{xl:'800px', '2xl': '900px'}}> 
        <Heading pb={20} as='h2' size='3xl' noOfLines={1} textAlign={'center'}>Algo de nuestro trabajo!</Heading>
        <SimpleGrid columns={[1,2]} maxW={'11x1'} alignItems={'center'} marginTop={4}>
          <Box >
            <AspectRatio m={'auto'} maxW='560px' ratio={1} height={'500px'} bgColor={'transparent'}>
              <iframe
                src="https://www.youtube.com/embed/KB9dso-h_Es"
                title="YouTube video player"
                allowfullscreen />
            </AspectRatio>
          </Box>
          <Box >
            <AspectRatio m={'auto'} maxW='560px' height={'500px'} ratio={1} bgColor={'transparent'}>
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

