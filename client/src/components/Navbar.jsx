// import { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Spacer,
  Collapse,
  useDisclosure,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Auth from "../utils/auth";


function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const linkStyle = {
    ':hover': {
      color: 'black'
    }
  }

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      wrap="wrap"
      p={3}
      bg="brand.500"
      color="brand.900"
      position="relative"
    >
      <Box display={{ base: "block", md: "none" }} mr="1">
        <Button onClick={onToggle} variant="ghost">
          {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
        </Button>
        <Collapse in={isOpen} animateOpacity bg="ivory">
          {isOpen && (
            <Box
              position="absolute"
              top="100%"
              left={0}
              zIndex={10}
              width="100%"
              bg="brand.500"
              color="brand.800"
              mr="1"
              borderRadius="0px 0px 10px 10px"
            >
              <Stack spacing={6} align="left" fontWeight="600">
                {/* <Link href='/home' mx={3} my={3} fontFamily='Nunito' fontWeight='500'>Home</Link> */}
                {Auth.loggedIn() ? (
                  <>
                  <Link
                    href="/mydesk"
                    mx={3}
                    mt={1}
                    fontWeight="500"
                    sx={linkStyle}
                    >
                    MyDesk
                    </Link>
                    <Link 
                    onClick={()=>Auth.logout()}
                    mx={3} 
                    mb={2} 
                    sx={linkStyle}>
                        Logout
                    </Link>
                    </>
                    ) : ( <>
                <Link
                  href="/login"
                  mx={3}
                  my={3}
                  sx={linkStyle}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  mx={3}
                  my={3}
                  sx={linkStyle}
                >
                  Sign Up
                </Link></>)}
              </Stack>
            </Box>
          )}
        </Collapse>
      </Box>
      <Box mr="2" fontWeight="450" sx={linkStyle} color="brand.900">
        <a href="/" style={{ fontSize: "1.6rem"}}>
          DeskSpace
        </a>
      </Box>
      <Box display={{ base: "none", md: "block" }} fontWeight="500" color="brand.900">
        <Flex align="center" justify="between">
          <Breadcrumb separator={<ChevronRightIcon />}>
            {Auth.loggedIn() ? (
            <>            
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/mydesk"
                  mx={3}
                  my={3}
                  sx={linkStyle}>
                  My Desk
                  </BreadcrumbLink>
                </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  mx={3}
                  my={3}
                  sx={linkStyle}
                  onClick={()=> Auth.logout()}
                >
                  Logout
                </BreadcrumbLink>
              </BreadcrumbItem>
              </>
            ) : (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/login"
                    mx={3}
                    my={3}
                    sx={linkStyle}
                  >
                    Log In
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/signup"
                    mx={3}
                    my={3}
                    sx={linkStyle}
                  >
                    Sign Up
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </Breadcrumb>
        </Flex>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Navbar;
