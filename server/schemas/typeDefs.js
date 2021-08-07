const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [bookSchema]
    }

    type bookSchema {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input Book {
        authors: [String!]
        description: String!
        title: String!
        bookId: String!
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User   
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(data: Book!): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;