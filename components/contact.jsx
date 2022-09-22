import { Box, Container, Image, Stack} from '@chakra-ui/react'
import React from 'react'
import { FormContact } from './formContact'

export function Contact() {
  return (
    <Container id={'contact'} maxW={'full'} bgColor={'#d3d1eb'} position={'relative'} pb={20}>
        <Stack direction={'row'} justifyContent={'center'}>
            <Stack
                direction={'row'}
                width={'65%'}
                borderRadius={20}
                shadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}
            >
                <Box width={'40%'}>
                    <Image
                        borderBottomLeftRadius={20}
                        borderTopLeftRadius={20}
                        objectFit={'cover'}
                        src={'/fotoContacto.jpg'}
                        alt={'tablero'}
                        h={'100%'}
                    />
                </Box>
                <Box width={'60%'}>
                    <FormContact  />
                </Box>
            </Stack>
        </Stack>
    </Container>
  )
}
