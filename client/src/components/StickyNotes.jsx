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
    w:'80%',
    mt: '20',
    borderRadius:'10px'
}
const buttonStyle = {
    borderColor: 'brand.500',
    ':hover': {
        bg: 'brand.500',
        borderColor: 'brand.600'
    }
};


return (
    <Flex bg="brand.900" flexDirection="column" alignItems="center" textAlign="center" w="100%" h="100%" borderRadius="0 0 10px 10px">
        <Heading as="h3" color="brand.700" mt="3" mb="6" fontSize="38px" fontWeight="400">My Sticky Notes</Heading>
        <Flex flexDirection="row" flexFlow="row wrap" alignItems="center" justifyContent="center" mb="6">
            {newNotesList.map((item, index) => (
            <Box key={index} alignItems="center"> 
                <Card textAlign="center" m="2" bg="brand.700" minW="200px" minH="175px">
                    <CardBody fontSize="18px" fontWeight="600">
                        {index + 1}. {item.input}
                    </CardBody>
                <IconButton onClick={() => deleteItem(index)} border="solid 1px black">
                    <DeleteIcon />
                </IconButton>
                </Card>
            </Box>
                ))}
        </Flex>
        <Flex flexFlow="column wrap" alignItems="center" w="250px" maxW="90%" mb="2" h="80vh">
            <Box>
                <Form method="post" action="/create" onSubmit={addToList}>
                <FormControl borderRadius="10px" bg="brand.700" h="200px" boxShadow="2px 2px 1px 2px black">
                    <Input placeholder="add note" ref={input} type="text" name="title" sx={inputStyle}/>
                </FormControl>
                    <Button type="submit" m="5" bg="brand.600" sx={buttonStyle} border="solid 3px"><AddIcon/></Button>
                </Form>
            </Box>
        </Flex>
</Flex>
)
}