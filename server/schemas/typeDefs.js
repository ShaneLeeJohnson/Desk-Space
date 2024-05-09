const typeDefs = `
    type Flashcard {
        _id: ID!
        question: String!
        answer: String!
    }
    
    type User {
        _id: ID!
        username: String!
        email: String!
        flashcards: [Flashcard]
    }

    type AuthPayload {
        token: String!
        user: User!
    }
    
    type Query {
        flashcards: [Flashcard!]!
        flashcard(_id: ID!): Flashcard
        user: User
        users: [User]
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): AuthPayload!
        addCard(question: String!, answer: String!): User
        updateCard(_id: ID!, question: String, answer: String): Flashcard
        removeCard(_id: ID!): Flashcard
        login(username: String!, password: String!): AuthPayload!
    }
    
`;

module.exports = typeDefs;
