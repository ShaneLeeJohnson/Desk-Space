import {useState} from 'react';
import {Flex, Box, Input, Button} from '@chakra-ui/react';

const EditFlashcard = ({flashcard, onSave}) => {
    const [editedContent, setEditedContent] = useState(flashcard.question);
    const handleSaveClick = () => {
        onSave (editedContent);
    };
    const handleContentChange = (e) => {
        setEditedContent (e.target.value);
    };
    return (
        <Flex flexflow='column wrap' alignItems='center' justifyContent='center'>
            <Box width='300px'>
                <Input value={editedContent} onChange={handleContentChange} placeholder='Enter New Text' mb={4}/>
                <Button onClick={handleSaveClick} colorScheme='blue'>Save</Button>
            </Box>
        </Flex>
    );
};

export default EditFlashcard;