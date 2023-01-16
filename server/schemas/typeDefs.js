const { gql } = require('apollo-server-express');

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
    urgency: String
    resolved: String
    createdAt: String
    comments: [Comments]
  }
  type Comments {
    commentId: ID
    createdAt: String
    commentText: String
  }

  type Auth {
    token: ID
    user: User
  }

  input FeedInput {
    status:String
    urgency:String
    resolved: String
  }

  input CommentInput {
    commentText:String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String, password: String): Auth
     addUser(firstname: String, lastname: String, zipcode: String, email: String, password: String): Auth
    addFeed(feedData:FeedInput): User
    deleteFeed(feedId: ID): User
    addComment(commentData: CommentInput!): User
    deleteComment(commentId:ID): User
  }
`;

module.exports = typeDefs;
