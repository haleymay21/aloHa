const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    zipcode: String
    email: String
    password: String
    liveFeed: [Feed]
  }

  type Feed {
    statusId: ID
    status: String
    urgency: Int
    resolved: Boolean
    comments: [Comments]
  }
  type Comments {
    commentText: String
  }

  type Auth {
    token: ID
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(firstname: String, lastname: String, zipcode: String, email: String, password: String): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
