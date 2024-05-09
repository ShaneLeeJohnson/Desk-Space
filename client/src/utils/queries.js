import { gql } from '@apollo/client';

export const GET_USER = gql`
query user {
    user {
      _id
      email
      username
      flashcards {
        _id
        answer
        question
      }
    }
  }`;

export const GET_FLASHCARDS = gql`
  query Flashcards {
    flashcards {
      _id
      question
      answer
    }
  }`;