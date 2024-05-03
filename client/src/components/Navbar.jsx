import React, { useState } from 'react';
import { Flex, Box, Button, Spacer, Collapse, useDisclosure } from '@chakra-ui/react';
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
                <Box>
                    <Flex direction={{base:'column', md:'row'}} align={{base:'center', md:'row'}} pt={{base:4, md:0}}>
                        <a href='/home'>Home</a>
                        <a href='/mydesk'>My Desk</a>
                        <a href='/login'>Log In</a>
                        <a href='/signup'>Sign Up</a>
                    </Flex>
                </Box>
            </Collapse>
            <Box display={{base:'none', md:'block'}}>
                <Flex align='center' justify='flex-end'>
                    <Box display={{base:'none', md:'block'}} mr={4}><a href='/home'>Home</a></Box>
                    <Box display={{base:'none', md:'block'}} mr={4}><a href='/mydesk'>My Desk</a></Box>
                    <Box display={{base:'none', md:'block'}} mr={4}><a href='/login'>Log In</a></Box>
                    <Box display={{base:'none', md:'block'}} mr={4}><a href='/signup'>Sign Up</a></Box>
                </Flex>
            </Box>
            <Spacer />
        </Flex>
    );
}

export default Navbar;