import { Flex, Box, FormControl, 
        Text, Heading, Input, 
        Button, Card, CardHeader, 
        CardBody, Link, ListItem,
        UnorderedList, IconButton } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'
import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-router-dom'

// Setting up job list properties for user inputs
export default function JobList() {

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

const inputStyle = {
    textAlign: 'center',
    bg: 'white',
    w:'50%',
    m: '2',
    borderRadius:'10px'
}
const buttonHover = {
    ':hover': {
        bg: 'brand.700',
        color: 'brand.800'
    }
};

const deleteItem = index => {
    const updatedList = [...newJobList];
    updatedList.splice(index, 1);
    setNewJobList(updatedList);
}

return (
    <Flex bg="brand.800" flexDirection="column" alignItems="center" textAlign="center" w="100%" h="100vh" borderRadius="0 0 10px 10px">
                <Heading as="h3" fontSize="34px" fontWeight="300" color="white" mb="4">Job Info List</Heading>
    <Flex flexDirection="row" flexFlow="row wrap" alignItems="center" justifyContent="center" mb="6">
            {newJobList.map((item, index) => (
        <Box key={index}> 
            <Card textAlign="center" m="2">
                <CardHeader as="h4" fontSize="20" fontWeight="600">
                    {index + 1}. {item.jobTitle}
                </CardHeader>
                <UnorderedList listStyleType="none" mb="2" fontSize="18px">
                    <ListItem>
                        <Link href ={item.jobLink} textDecoration="underline">{item.jobLink}</Link>
                    </ListItem>
                    <ListItem>
                        {item.jobContact} 
                    </ListItem>
                </UnorderedList>
            <IconButton onClick={() => deleteItem(index)} bg="red.400"><DeleteIcon /></IconButton>
        </Card>
        </Box>
                ))}
        </Flex>
        <Box>
            <Text color="brand.600" fontSize="24px" m="1" fontWeight="400">Add Job Info</Text>
            <Form method="post" action="/create" onSubmit={addToList}>
            <FormControl borderRadius="10px" bg="brand.500" p="3">
                <Input placeholder="Company name/Job title" ref={inputTitle} type="text" name="title" sx={inputStyle}/>
                <Input placeholder="Link to website/job listing (if any)" ref={inputLink} type="text" name="link" sx={inputStyle}/>
                <Input placeholder="Company contact info" ref={inputContact} type="text" name="contact" sx={inputStyle}/>
            </FormControl>
            <Button type="submit" m="2" bg="brand.600" sx={buttonHover}><AddIcon/></Button>
            </Form>
        </Box>
        </Flex>
)
}