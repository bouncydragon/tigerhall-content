import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($limit: Int!, $offset: Int!, $keywords: String!) {
    contentCards(
      filter: { limit: $limit, keywords: $keywords, offset: $offset, types: [PODCAST, STREAM] }
    ) {
      edges {
        ... on Podcast {
          id
          name
          length
          slug
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
          slug
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