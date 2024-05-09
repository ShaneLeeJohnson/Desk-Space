import React from 'react'
import {Flex, Box, Heading, Text} from '@chakra-ui/react'
import '../App.css'
import {useSpring, animated} from 'react-spring';

export default function Flashcard({flashcard}) {
    const [isFlipped, setFlipped] = React.useState(false);
    const {transform, boxShadow} = useSpring ({
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        boxShadow: isFlipped ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : '0px 4px 20px rgba(0, 0, 0, 0.1)',
        config: {mass:6, tension:800, friction:60}
    });
    const handleFlip = () => {
        setFlipped (!isFlipped);
    };
    return (
        <Flex flexFlow='column wrap' alignItems='center' justifyContent='center' bg='brand.900' color='brand.600'>
            <animated.div style = {{transform,
                boxShadow: isFlipped ? '-8px 8px 8px rgba(0, 0, 0, 0.2)' : '8px 8px 8px rgba(0, 0, 0, 0.1)',
                width: '300px',
                height: '200px',
                position: 'relative',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: 'white',
                border: '2px solid white',
                transition: 'border-color 0.3s',
            }}
            onClick={handleFlip}
            _hover={{bg:'brand.700'}}
        >
                <Box position='absolute' top={0} left={0} w='100%' h='100%'>
                    <Heading fontSize='xl' fontWeight='bold' color={isFlipped ? 'black' : 'white'} textAlign='center' mt='8%' style={{transform:isFlipped ? 'rotateY(180deg)' : 'none'}}>
                        {isFlipped ? flashcard.answer : flashcard.question}
                    </Heading>
                    {!isFlipped && (
                        <Text fontSize='lg' color='black' fontWeight='bold' textAlign='center' mt='2'>Click to reveal the answer</Text>
                    )}
                </Box>
            </animated.div>
        </Flex>
    )
}