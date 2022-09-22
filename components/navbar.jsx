import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react'
  import {HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon} from '@chakra-ui/icons'
  import logo from '../public/logo.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
    
  export function Navbar() {
    const {isOpen, onToggle} = useDisclosure()
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  
    return (
      <Box bg={scrollY > 20 ? '#202020b0' : 'transparent'} backdropFilter={scrollY > 20 ? 'blur(8px)' : 'none'} transition={'all 1s ease-out'} position={{base: 'static', md: 'fixed'}} width="100%" zIndex={2}>
        <Flex
          align={'center'}
          bg={'transparent'}
          borderBottom={0}
          borderStyle={'solid'}
          color={useColorModeValue('gray.600', 'white')}
          minH={{base: '60px', md: '100px'}}
          px={{base: 2}}
          py={{base: 2}}
        >
          <Flex display={{base: 'flex', md: 'none'}} flex={{base: 0, md: 'auto'}} ml={{base: -2}}>
            <IconButton
              aria-label={'Toggle Navigation'}
              color={'grey'}
              icon={isOpen ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={5} w={5} />}
              variant={'ghost'}
              onClick={onToggle}
            />
          </Flex>
          <Flex
            flex={{base: 1}}
            justify={{base: 'start', md: 'center'}}
            justifyContent={{base: 'center', md: 'space-between'}}
            ml={{md: 4, lg: 20}}
            mr={{md: 4, lg: 20}}
          >
            <Image src={logo} alt={logo} />
            <Flex display={{base: 'none', md: 'flex'}} justify={'flex-end'} mr={{md: 0, lg: 20}}>
              <DesktopNav scrollY={scrollY}/>
            </Flex>
          </Flex>
        </Flex>
  
        <Collapse animateOpacity in={isOpen}>
          <MobileNav />
        </Collapse>
      </Box>
    )
  }
  
  const DesktopNav = ({scrollY}) => {
    const linkColor = useColorModeValue('white');
    const linkHoverColor = useColorModeValue('grey')
  
    return (
      <Stack direction={'row'} spacing={5}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} display={'flex'} alignItems={'center'} p={{md: 3, lg: 3}}>
            <Popover placement={'bottom-start'} trigger={'hover'}>
              <PopoverTrigger>
                <Link
                  _hover={{bgColor: '#303030',color: 'white',outline: '2px solid #e7de26', borderRadius:'10px', transition: 'outline .6s ease-in-out'}}
                  color={linkColor}
                  fontFamily={'Sk-Modernist, sans-serif'}
                  fontSize={{md: '15px', lg: '18px'}}
                  fontWeight={'bold'}
                  href={navItem.href ?? '#'}
                  p={{base: 0, lg: 2}}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  
  
  const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue('white', 'gray.800')} display={{md: 'none'}} p={4}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = ({label, children, href}) => {
    const {isOpen, onToggle} = useDisclosure()
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          _hover={{
            textDecoration: 'none',
          }}
          align={'center'}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          py={2}
        >
          <Text color={useColorModeValue('gray.600', 'gray.200')} fontWeight={600}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              h={6}
              transform={isOpen ? 'rotate(180deg)' : ''}
              transition={'all .25s ease-in-out'}
              w={6}
            />
          )}
        </Flex>
  
        <Collapse animateOpacity in={isOpen} style={{marginTop: '0!important'}}>
          <Stack
            align={'start'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            borderLeft={1}
            borderStyle={'solid'}
            mt={2}
            pl={4}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} href={child.href} py={2}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }

  const NAV_ITEMS= [
    {
      label: 'Inicio',
      href: '#',
    },
    {
      label: 'Nosotros',
      href: '#about',
    },
    {
      label: 'Video',
      href: '#features',
    },
    {
      label: 'Contactanos',
      href: '#contact',
    },
  ]
  
  