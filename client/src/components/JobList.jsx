import { Flex, Box, FormControl, 
    Text, Heading, Input, Button, } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-router-dom'

// Setting up job list properties for user inputs
export default function JobList() {
    const inputStyle = {
        textAlign: 'center',
        bg: 'white',
        w:'50%',
        m: '2',
        borderRadius:'10px'
    }
    const buttonHover = {
        ':hover': {
            bg: 'brand.500',
            color: 'brand.800'
        }
    }
const [newJobList, setNewJobList] = useState([]);
const inputTitle = useRef();
const inputLink = useRef();
const inputContact = useRef();

// Setting up retrieval and parsing of list item data in local storage
useEffect(() => {
    const storedJobList = localStorage.getItem('jobList');
    if (storedJobList) {
        setNewJobList(JSON.parse(storedJobList));
    }
}, []);

// Save newJobItem to localStorage whenever it changes
useEffect(() => {
    localStorage.setItem('jobList', JSON.stringify(newJobList));
}, [newJobList]);

let addToList = e => {
    e.preventDefault();
    const newJobItem = {
        jobTitle: inputTitle.current.value,
        jobLink: inputLink.current.value,
        jobContact: inputContact.current.value
    };
// Clears all inputs after saving new item
    setNewJobList([...newJobList, newJobItem]);
    inputTitle.current.value= '';
    inputLink.current.value= ''; 
    inputContact.current.value='';
};

return (
    <Flex bg="brand.800" flexFlow="column wrap" alignItems="center" textAlign="center" w="100%" h="100vh" borderRadius="0 0 10px 10px">
        <Box display="inline-block" mb="3">
        <Heading as="h3" fontSize="34px" fontWeight="300" color="white" mb="4">Jobs List</Heading>
        <Box>
            <Text color="white" fontSize="20px" m="1" fontWeight="400" >Add Job Info</Text>
            <Form method="post" action="/create" onSubmit={addToList}>
            <FormControl borderRadius="10px" bg="brand.500" p="3">
                <Input placeholder="Company name/Job title" ref={inputTitle} type="text" name="title" sx={inputStyle}/>
                <Input placeholder="Link to website/job listing (if any)" ref={inputLink} type="text" name="link" sx={inputStyle}/>
                <Input placeholder="Company contact info" ref={inputContact} type="text" name="contact" sx={inputStyle}/>
            </FormControl>
            <Button type="submit" m="2" sx={buttonHover}>Save</Button>
            </Form>
        </Box>
        <ul>
            {newJobList.map((item, index) => (
            <>
        <Box listStyleType="none" textAlign="center">
            <Heading as="h4" fontSize="20" fontWeight="500">{index + 1}.{item.jobTitle}</Heading>
            <Box fontSize="16.5px" >
                <li key={index}>
                    <a href ={item.jobLink}>{item.jobLink}</a>
                </li>
                <li>
                {item.jobContact} 
                </li>
            </Box>
            </Box>
            </>
                ))}
            </ul>
        </Box>
    </Flex>
)
}