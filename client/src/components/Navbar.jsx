import React, { useState } from 'react';
import { Flex, Box, Button, Spacer, Collapse, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar () {
    const { isOpen, onToggle } = useDisclosure ();
    return (
        <Flex align='center' justify='space-between' p={4} bg='beige.800' color='black'>
            <Box><a href='/'>Desk Space</a></Box>
            <Spacer />
            <Box display={{base: 'block', md: 'none'}}>
                <Button onClick={onToggle} variant='ghost'>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button>
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <Box>
                    <Flex direction={{base:'column', md:'row'}} align={{base:'center', md:'row'}} pt={{base:4, md:0}}>
                        <a href='/'>Home</a>
                        <a href='/'>My Desk</a>
                        <a href='/'>Log In</a>
                        <a href='/'>Sign Up</a>
                    </Flex>
                </Box>
            </Collapse>
        </Flex>
    );
}

export default Navbar;