import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      firstname
      lastname
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



