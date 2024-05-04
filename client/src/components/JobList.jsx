import { Flex, Box, FormControl, 
        FormLabel, Input, Button, } from '@chakra-ui/react';
import { useState, useRef } from 'react'
import { Form } from 'react-router-dom'

export default function JobList() {
    const [newJobItem, setNewJobItem] = useState([]);
    const input = useRef();
    let addToList = e => {
        e.preventDefault();
        setNewJobItem([...newJobItem, input.current.value]);
    }

    return (
        <Flex flexFlow="column wrap" alignItems="center" justifyContent="center" textAlign="center" m="5%" padding="10px">
            <Box>
            <Form method="post" action="/create" onSubmit={addToList}>
            <FormControl>
                <FormLabel textAlign="center">Job List</FormLabel>
                <Input placeholder="Enter job title and link" ref={input} type="text" name="title" textAlign="center"  />
                <Button m="2%" type="submit">Save</Button>
            </FormControl>
            </Form>
            </Box>
            <Box display="inline-block">
                <ul>
                {newJobItem.map((item, b) => (
                <li key={b}>{item}</li>
                ))}
                </ul>
            </Box>
        </Flex>
    )
}