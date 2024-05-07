// import { useState } from 'react';
import { Flex, Box, Button, Spacer, Collapse, useDisclosure, Link, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Navbar () {
    const { isOpen, onToggle } = useDisclosure ();
    return (
        <Flex direction='row' align='center' justify='center' wrap='wrap' p={4} bg='ivory' color='black' position='relative'>
            <Box display={{base: 'block', md: 'none'}}>
                <Button onClick={onToggle} variant='ghost'>{isOpen ? <CloseIcon w={6} h={6}/> : <HamburgerIcon w={6} h={6}/>}</Button>
                <Collapse in={isOpen} animateOpacity bg='ivory'>
                    {isOpen && (
                    <Box position='absolute' top='100%' left={0} zIndex={10} width='100%' bg='ivory' color='black' p={2}>
                        <Stack spacing={6} align='left'>
                            {/* <Link href='/home' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Home</Link> */}
                            <Link href='/mydesk' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>My Desk</Link>
                            <Link href='/login' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Log In</Link>
                            <Link href='/signup' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Sign Up</Link>
                        </Stack>
                    </Box>
                    )}
                </Collapse>
            </Box>
            <Box><a href='/' style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Desk Space</a></Box>
            <Box display={{base:'none', md:'block'}}>
                <Flex align='center' justify='between'>
                    <Breadcrumb separator={<ChevronRightIcon/>}>
                        {/* <BreadcrumbItem>
                            <BreadcrumbLink href='/home' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Home</BreadcrumbLink>
                        </BreadcrumbItem> */}
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/mydesk' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>My Desk</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/login' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Log In</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/signup' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Sign Up</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
            </Box>
            <Spacer />
        </Flex>
    );
}

export default Navbar;