import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($limit: Int!, $offset: Int!) {
    contentCards(
      filter: { limit: $limit, keywords: "", offset: $offset, types: [PODCAST, STREAM] }
    ) {
      edges {
        ... on Podcast {
          id
          name
          length
          image {
            alt
            uri
            originalName
          }
          experts {
            firstName
            lastName
            company
          }
        }
        ... on Stream {
          id
          name
          length
          image {
            alt
            uri
            originalName
          }
          participants {
            firstName
            lastName
            company
          }
        }
      }
    }
  }
`;
