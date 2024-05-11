import { useState, useEffect } from "react";
import { Flex, Box, Input, Button, FormLabel } from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client";
import {  useParams } from "react-router-dom";
import { GET_SINGLE_FLASHCARD } from "../utils/queries";
import { UPDATE_CARD } from "../utils/mutations";

const EditFlashcard = () => {
  const { id } = useParams();

  const { data } = useQuery(GET_SINGLE_FLASHCARD, {
    variables: { id: id }
  });

  const cardData = data?.flashcard || {};

  
  const [editedContent, setEditedContent] = useState({
      question: cardData.question,
      answer: cardData.answer
    });

    useEffect(()=> {
      if(data){
        setEditedContent({
          question: cardData.question,
          answer: cardData.answer
        })
      }
    }, [data])
   

  const [updateCard] = useMutation(UPDATE_CARD)

  const handleUpdateSubmit = async () => {
    try {
       
        await updateCard({
            variables: {
                id: id,
                ...editedContent
            },
           
        });
        window.location.replace('/flashcards')
    } catch (error) {
        console.error('Flashcard NOT Updated:', error);
    } 
};
  const handleContentChange = (e) => {
    const {name, value} = e.target
      setEditedContent ({...editedContent, [name]: value});
  };

  return (
    <Flex flexflow="column wrap" alignItems="center" justifyContent="center">
      <Box width="300px">
    <FormLabel>Question:</FormLabel>
        <Input
        name="question" 
          value={editedContent?.question}
          onChange={handleContentChange}
          placeholder="Enter New Text"
          mb={4}
        />
         <FormLabel>Answer:</FormLabel>
        <Input
        name="answer"
          value={editedContent?.answer}
          onChange={handleContentChange}
          placeholder="Enter New Text"
          mb={4}
        />
        <Button
          onClick={handleUpdateSubmit}
          colorScheme="blue"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default EditFlashcard;
