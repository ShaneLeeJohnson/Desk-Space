// import { useState } from 'react';
import { Flex, Box, Button, Spacer, Collapse, useDisclosure, Link} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar () {
    const { isOpen, onToggle } = useDisclosure ();
    return (
        <Flex align='center' justify='space-between' p={4} bg='beige.800' color='black'>
            <Box><a href='/' style={{fontSize: '2rem', fontWeight: 'bold'}}>Desk Space</a></Box>
            <Box display={{base: 'block', md: 'none'}}>
                <Button onClick={onToggle} variant='ghost'>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button>
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <Box mt={{base:4, md:0}}>
                    <Flex direction={{base:'column', md:'column'}} align='center' justify='center'>
                        <Link href='/home' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Home</Link>
                        <Link href='/mydesk' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>My Desk</Link>
                        <Link href='/login' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Log In</Link>
                        <Link href='/signup' mx={3} my={3} fontFamily='Nunito' fontWeight='bold'>Sign Up</Link>
                    </Flex>
                </Box>
            </Collapse>
            <Box display={{base:'none', md:'block'}}>
                <Flex align='center' justify='flex-end'>
                    <Box mr={5} fontFamily='Nunito' fontWeight='bold'><a href='/home' >Home</a></Box>
                    <Box mr={5} fontFamily='Nunito' fontWeight='bold'><a href='/mydesk'>My Desk</a></Box>
                    <Box mr={5} fontFamily='Nunito' fontWeight='bold'><a href='/login'>Log In</a></Box>
                    <Box mr={5} fontFamily='Nunito' fontWeight='bold'><a href='/signup'>Sign Up</a></Box>
                </Flex>
            </Box>
            <Spacer />
        </Flex>
    );
}

export default Navbar;