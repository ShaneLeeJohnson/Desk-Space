import {Box, Flex, Text, IconButton, Link} from '@chakra-ui/react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <Box as='footer' bg='ivory' color='black' p={10}>
            <Flex justify='space-between' align='center'>
                <Text fontSize='lg' fontWeight='bold' fontFamily='Nunito'>© 2024 Desk Space. All Rights Reserved.</Text>
                <Flex>
                    <Text fontSize='lg' fontWeight='bold' fontFamily='Nunito' p={3}>Follow Us</Text>
                    <IconButton as={Link} href='https://facebook.com' aria-label='Facebook' icon={<FaFacebook />} variant='ghost' size='2xl' color='gray' _hover={{color:'blue'}} mr={2}/>
                    <IconButton as={Link} href='https://instagram.com' aria-label='Instagram' icon={<FaInstagram />} variant='ghost' size='2xl' color='gray' _hover={{color:'pink'}} mr={2}/>
                    <IconButton as={Link} href='https://twitter.com' aria-label='Twitter' icon={<FaTwitter />} variant='ghost' size='2xl' color='gray' _hover={{color:'black'}} mr={2}/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer;