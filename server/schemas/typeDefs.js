const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    zipcode: String
    location: String
    image: String
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
  type Locals {
    name: String
    hometown: String
    whatToKnow: String
    support: String
    whereAreYou: String
  }

  type Auth {
    token: ID
    user: User
  }

  input FeedInput {
    status: String
    urgency: Int
    resolved: Boolean
  }

  input CommentInput {
    commentText: String
  }

  input LocalsInput {
    name: String
    hometown: String
    whatToKnow: String
    support: String
    whereAreYou: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(
      firstname: String
      lastname: String
      zipcode: String
      email: String
      password: String
    ): Auth
    addFeed(feedData: FeedInput!): User
    deleteFeed(feedId: ID): User
    addComment(commentData: CommentInput!): User
    deleteComment(commentId: ID): User
    addLocal(localsData: LocalsInput): Locals
  }
`;

module.exports = typeDefs;
