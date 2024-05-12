import {Box, Flex, Text, IconButton, Link, SimpleGrid} from '@chakra-ui/react';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaTiktok, FaSnapchat, FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <Box as='footer' color='black' bg="white" p="2" h='50px' bottom="0" width="100%">
            <Flex justify={['center', 'space-between']} textAlign='center' mt="1" direction={['column', 'row']}>
                <Text fontSize='lg' fontWeight='semi-bold' fontFamily='Nunito'>© 2024 DeskSpace. All Rights Reserved.</Text>
                <Flex alignItems='center' justifyContent={['center', 'flex-end']}>
                    <Text fontSize='lg' fontWeight='400' mr={['0', '2']} textAlign={['center', 'right']}>Follow Us on GitHub!</Text>
                    <IconButton as={Link} href='https://github.com/ShaneLeeJohnson/Desk-Space' aria-label='GitHub' icon={<FaGithub />} variant='ghost' size='2xl' color='black' _hover={{color:'black'}} mr="2" ml="2"/>
                </Flex>
                    {/* <SimpleGrid columns={[4,8]} spacing={2}> */}
                        {/* <IconButton as={Link} href='https://facebook.com' aria-label='Facebook' icon={<FaFacebook />} variant='ghost' size='2xl' color='blue' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://instagram.com' aria-label='Instagram' icon={<FaInstagram />} variant='ghost' size='2xl' color='purple' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://twitter.com' aria-label='Twitter' icon={<FaTwitter />} variant='ghost' size='2xl' color='teal' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://linkedin.com' aria-label='Linkedin' icon={<FaLinkedin />} variant='ghost' size='2xl' color='blue' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://youtube.com' aria-label='Youtube' icon={<FaYoutube />} variant='ghost' size='2xl' color='red' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://pinterest.com' aria-label='Pinterest' icon={<FaPinterest />} variant='ghost' size='2xl' color='darkred' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://tiktok.com' aria-label='Tiktok' icon={<FaTiktok />} variant='ghost' size='2xl' color='black' _hover={{color:'black'}} mr={1}/>
                        <IconButton as={Link} href='https://snapchat.com' aria-label='Snapchat' icon={<FaSnapchat />} variant='ghost' size='2xl' color='yellow' _hover={{color:'black'}} mr={1}/> */}
                    {/* </SimpleGrid> */}
            </Flex>
        </Box>
    )
}

export default Footer;