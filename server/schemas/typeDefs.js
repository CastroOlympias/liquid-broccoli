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

    // Resolvers work on the the type Query and the mutations
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        savedBooks(username: String): [bookSchema]
        book(_id: ID!): bookSchema
    }

    type Mutation {
        login(email: String!), password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: string!, link: String!): User
        removeBook(bookId, String!); User
    }
`;