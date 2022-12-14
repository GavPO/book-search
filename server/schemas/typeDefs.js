const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]!
  }

  type Book {
    bookId: Int
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(userId: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, skill: String!): User
    deleteBook(userId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;