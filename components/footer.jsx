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
    <Container bgColor={'#202020'} maxW={'full'} p={16}>
      <Stack maxWidth={'7xl'} margin={'auto'} gap={32} direction={'row'}>
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
          <Link href="/#"><Text as={'p'} fontSize={18} userSelect={'none'}>Inicio</Text></Link>
          <Link href="/#about"><Text as={'p'} fontSize={18} userSelect={'none'}>About</Text></Link>
          <Link href="/#features"><Text as={'p'} fontSize={18} userSelect={'none'}>Video</Text></Link>
          <Link href="/#contact"><Text as={'p'} fontSize={18} userSelect={'none'}>Contact</Text></Link>
        </Stack>
      </Stack>
      <Text as={'p'}></Text>
    </Container>
  )
}
