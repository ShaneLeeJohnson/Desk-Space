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