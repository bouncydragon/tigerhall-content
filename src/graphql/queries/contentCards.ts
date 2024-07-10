import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($limit: Int!, $offset: Int!, $keywords: String!) {
    contentCards(
      filter: { limit: $limit, keywords: $keywords, offset: $offset, types: [PODCAST, STREAM] }
    ) {
      edges {
        ... on Podcast {
          name
          length
          slug
          image {
            alt
            uri
          }
          categories {
            name
          }
          experts {
            firstName
            lastName
            company
          }
        }
        ... on Stream {
          name
          length
          slug
          image {
            alt
            uri
          }
          categories {
            name
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
