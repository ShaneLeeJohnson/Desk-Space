import { Flex, Box, FormControl, 
        Heading, Input, Button, 
        Card, CardBody, IconButton } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'
import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-router-dom'

// Setting up job list properties for user inputs
export default function StickyNotes() {

const [newNotesList, setNewNotesList] = useState([]);
const input = useRef();

// Setting up retrieval and parsing of list item data in local storage
useEffect(() => {
    const storedNotesList = localStorage.getItem('notesList');
    if (storedNotesList) {
        setNewNotesList(JSON.parse(storedNotesList));
    }
}, []);

// Save newJobItem to localStorage whenever it changes
useEffect(() => {
    localStorage.setItem('notesList', JSON.stringify(newNotesList));
}, [newNotesList]);

let addToList = e => {
    e.preventDefault();
    const newNotesItem = {
        input: input.current.value
    };
// Clears all inputs after saving new item
    setNewNotesList([...newNotesList, newNotesItem]);
        input.current.value
};

const deleteItem = index => {
    const updatedList = [...newNotesList];
    updatedList.splice(index, 1);
    setNewNotesList(updatedList);
}

const inputStyle = {
    textAlign: 'center',
    bg: 'white',
    w:'50%',
    m: '2',
    borderRadius:'10px'
}
const buttonHover = {
    ':hover': {
        bg: 'brand.500'
    }
};

return (
    <Flex bg="brand.800" flexDirection="column" alignItems="center" textAlign="center" w="100%" h="100%" borderRadius="0 0 10px 10px">
        <Heading as="h3" fontSize="34px" fontWeight="300" color="white" m="3">My Sticky Notes</Heading>
        <Flex flexDirection="row" flexFlow="row wrap" alignItems="center" justifyContent="center" mb="6">
            {newNotesList.map((item, index) => (
            <Box key={index} alignItems="center"> 
                <Card textAlign="center" m="2" bg="brand.700" minW="200px" minH="175px">
                    <CardBody fontSize="18px" fontWeight="600">
                        {index + 1}. {item.input}
                    </CardBody>
                <IconButton onClick={() => deleteItem(index)} border="solid 2px black">
                    <DeleteIcon />
                </IconButton>
                </Card>
            </Box>
                ))}
        </Flex>
        <Flex flexFlow="column wrap" alignItems="center" maxW="275px" mb="2" h="60vh">
            <Box>
                <Form method="post" action="/create" onSubmit={addToList}>
                <FormControl borderRadius="10px" bg="brand.700" p="10" h="220px" boxShadow="3px 3px 3px 3px black">
                    <Input placeholder="new note" ref={input} type="text" name="title" sx={inputStyle}/>
                </FormControl>
                    <Button type="submit" m="3" bg="brand.600" sx={buttonHover} border="solid 3px black"><AddIcon/></Button>
                </Form>
            </Box>
        </Flex>
</Flex>
)
}