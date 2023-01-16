import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      firstname
      lastname
      zipcode
      location
      image
      email
      savedFeeds {
        feedId
        status
        problem
        resolved
      }
      savedComments {
        commentId
        commentText
      }
    }
  }
`;



