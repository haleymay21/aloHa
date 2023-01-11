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
    $zipcode: String
    $email: String
    $password: String
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      zipcode: $zipcode
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

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
