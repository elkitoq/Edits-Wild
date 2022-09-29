import { Box, Container, Link, Stack, Text, chakra, VisuallyHidden, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../public/logo.png'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href, brandColor }) => {
  return (
    <chakra.button
      _hover={{
        bg: brandColor,
        color: 'white',
        transition: 'all .4s ease-in-out'
      }}
      alignItems={'center'}
      as={'a'}
      bg={'white'}
      color={brandColor}
      cursor={'pointer'}
      display={'inline-flex'}
      h={10}
      href={href}
      justifyContent={'center'}
      rounded={'full'}
      transition={'background 0.3s ease'}
      w={10}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export function Footer() {
  return (
    <Container bgColor={'#202020'} maxW={'full'} p={4}>
      <Stack maxWidth={'7xl'} margin={'auto'} gap={{base:10,md: 32}} direction={{base:'column',md:'row'}} justifyContent={{md:'center',xl: 'left'}}>
        <VStack spacing={6}>
          <Image src={logo} alt={logo} />
          <Stack direction={'row'} spacing={4}>
            <SocialButton href={'#'} label={'Youtube'} brandColor={'#c4302b'} textColor={''}>
              <FaYoutube />
            </SocialButton>
            <SocialButton href={'#'} label={'Instagram'} brandColor={'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'} textColor={''}>
              <FaInstagram />
            </SocialButton>
            <SocialButton href={'#'} label={'Twitter'} brandColor={'#00acee'} textColor={''}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </VStack>
        <Stack color={'white'} spacing={2} >
          <Text as={'h2'} fontSize={28} userSelect={'none'}>Menu</Text>
          <Link 
            href="/#" 
            _hover={{
              textDecoration:'none',
              color:'grey'
            }}
          >
            <Text as={'p'} fontSize={18} userSelect={'none'}>Inicio</Text>
          </Link>
          <Link 
            href="/#about"
            _hover={{
              textDecoration:'none',
              color:'grey'
            }}
          >
            <Text as={'p'} fontSize={18} userSelect={'none'}>Nosotros</Text>
          </Link>
          <Link 
            href="/#features"
            _hover={{
              textDecoration:'none',
              color:'grey'
            }}
          >
            <Text as={'p'} fontSize={18} userSelect={'none'}>Video</Text>
          </Link>
          <Link 
            href="/#contact"
            _hover={{
              textDecoration:'none',
              color:'grey'
            }}
          >
            <Text as={'p'} fontSize={18} userSelect={'none'}>Contactanos</Text>
          </Link>
        </Stack>
      </Stack>
      <Text as={'p'} color={'grey'} mt={{md:'10px'}} textAlign={'center'} userSelect={'none'}>®2022 EditsWild</Text>
    </Container>
  )
}
