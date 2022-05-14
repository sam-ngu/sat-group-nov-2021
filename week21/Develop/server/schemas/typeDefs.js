const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: String!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: ID!
      authors: [String], 
      description: String!, 
      title: String!,
      image: String!,
      link: String!,
    ): User
    removeBook(bookId: ID!): User
  }
`;




module.exports = typeDefs;
