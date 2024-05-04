const typeDefs = `
    type Flashcard {
        id: ID!
        question: String!
        answer: String!
    }
    
    type User {
        id: ID!
        username: String!
        email: String!
        flashcards: [Flashcard!]!
    }
    
    type Query {
        flashcards: [Flashcard!]!
        flashcard(_id: ID!): Flashcard
        user(id: ID!): User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): AuthPayload!
        addCard(question: String!, answer: String!): Flashcard!
        updateUser(username: String!, email: String!): User
        updateCard(_id: ID!, question: String, answer: String): Flashcard
        removeCard(_id: ID!): Flashcard
        login(email: String!, password: String!): AuthPayload!
    }
    
    type AuthPayload {
        token: String!
        user: User!
    }
`;

module.exports = typeDefs;