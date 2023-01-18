import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstname: String
    $lastname: String
    $email: String
    $password: String
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADD_FEED = gql`
  mutation addFeed($feedData: FeedInput) {
    addFeed(feedData: $feedData) {
      _id
      firstname
      lastname
      zipcode
      liveFeed {
        status
        problem
      }
    }
  }
`;

export const DELETE_FEED = gql`
  mutation deleteFeed($feedId: ID!) {
    deleteFeed(feedId: $feedId) {
      _id
      firstname
      lastname
      zipcode
      liveFeed {
        status
        urgency
        resolved
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentData: CommentInput) {
    addComment(commentData: $commentData) {
      _id
      firstname
      lastname
      zipcode
      liveFeed {
        commentText
        createdAt
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
      firstname
      lastname
      zipcode
      liveFeed {
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_LOCAL = gql`
  mutation addLocal($localsData: localsInput) {
    addLocal(localsData: $localsData) {
      name
    }
  }
`;
