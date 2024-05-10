const mongoose = require('mongoose');
const Flashcard = require('../models/Flashcard');
const db = require('../config/connection');

const flashcardsData = [
    {
        question: 'Tell me about yourself.',
        answer: 'What are your top 3 skills relevant to this position? What experiences make you a strong candidate?'
    },
    {
        question: 'What are your salary expectations?',
        answer: 'Research average salary for the position and location. Consider your experience and qualifications. Be prepared to negotiate.'
    },
    {
        question: 'Why are you interested in this company?',
        answer: `Research company's mission, values, and culture on their website or social media. Mention specific aspects that align with your interests.`
    },
    {
        question: 'What are your strengths and weaknesses?',
        answer: `Strengths: Choose 2-3 relevant to the job description. Weaknesses: Choose a weakness you're actively improving on.`
    },
    {
        question: 'Tell me about a time you had to work under pressure',
        answer: 'Think of a project with a tight deadline or unexpected obstacles. Describe the pressure and your role'
    },
    {
        question: 'Describe a situation where you had to work effectively in a team.',
        answer: 'Recall a project requiring teamwork and collaboration. Describe your contribution and how you communicated effectively.'
    },
    {
        question: 'Give an example of a time you had to deal with a difficult customer/colleague',
        answer: `Think of a challenging interaction with a customer or colleague. Briefly describe the situation and the person's behavior. Explain how you reached a solution.`
    },
    {
        question: 'How do you handle disagreements with your supervisor or colleagues?',
        answer: 'Focus on respectful communication. Briefly describe a situation where you disagreed and how you found a solution collaboratively.'
    },
    {
        question: 'Tell me about a time you had to learn a new skill quickly.',
        answer: 'Think of a time you needed to learn a new software, process, or technique. Describe the skill and how you approached learning.'
    },
    {
        question: 'What questions do you have for us?',
        answer: 'Research the company to avoid generic questions. Prepare questions that showcase your genuine interest and initiative.'
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