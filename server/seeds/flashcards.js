const mongoose = require('mongoose');
const Flashcard = require('../models/Flashcard');
const db = require('../config/connection');

const flashcardsData = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        question: 'What is the tallest mountain in the world?',
        answer: 'Mount Everest'
    }
];

const seedFlashcards = async () => {
    db.once('open', async () => {
        try {

            await Flashcard.deleteMany({});

            await Flashcard.insertMany(flashcardsData);
            console.log('Flashcards seeded successfully!');


        } catch (error) {
            console.error(error);
        } finally {
            mongoose.connection.close();
        }
    });
};

seedFlashcards();