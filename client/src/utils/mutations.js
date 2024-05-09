import {gql} from '@apollo/client';

// Defines Mutation for New User Signup
export const SIGNUP_MUTATION = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const LOGIN_MUTATION = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_CARD = gql`
  mutation addCard($question: String!, $answer: String!) {
    addCard(question: $question, answer: $answer) {
    _id
    email
    username
      flashcards {
      _id
      question
      answer 
    }
  }
}
`;

export const UPDATE_CARD = gql`
  mutation updateCard($_id: ID!, $question: String!, $answer:String!) {
    updateCard(_id: $_id, question: $question, answer: $answer) {
      _id 
      question
      answer
    }
  }
`;

export const REMOVE_CARD = gql`
  mutation removeCard($_id: ID!) {
    removeCard(_id: $_id) {
    _id
    question
    answer
    }
} 
`;