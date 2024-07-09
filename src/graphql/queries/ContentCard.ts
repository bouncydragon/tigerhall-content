import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query {
    contentCards(filter: { limit: 30, keywords: "", types: [PODCAST] }) {
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
            title
            company
          }
        }
      }
    }
  }
`;
