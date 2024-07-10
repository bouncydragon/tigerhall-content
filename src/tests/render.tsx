import { MockedProvider } from '@apollo/client/testing';
import { GET_CONTENT_CARDS } from '../graphql/queries/contentCards.ts';

const mocks = [
  {
    request: {
      query: GET_CONTENT_CARDS,
      variables: { keywords: '', limit: 10, offset: 0 },
    },
    result: {
      data: {
        contentCards: {
          edges: [
            {
              name: 'Layla',
              length: 0,
              slug: 'layla-5',
              image: {
                alt: '',
                uri: 'https://images.staging.tigerhall.io/2024-03-15/4bd73c67-04b0-4396-9583-e49b2d94d448.jpg',
              },
              categories: [
                {
                  name: 'category Ila',
                },
              ],
              participants: [
                {
                  firstName: 'Lillian',
                  lastName: 'White',
                  company: '',
                },
              ],
            },
            {
              name: 'Some of These Days',
              length: 115,
              slug: 'some-of-these-days-6',
              image: {
                alt: '',
                uri: 'https://images.staging.tigerhall.io/2024-06-04/0717c7e7-646c-4b98-b248-9ad784cfe2e8.jpg',
              },
              categories: [
                {
                  name: 'category Enola',
                },
              ],
              participants: [
                {
                  firstName: 'Dorian',
                  lastName: 'Raynor',
                  company: '',
                },
              ],
            },
          ],
        },
      },
    },
  },
];

const createMockProvider = (ui: unknown) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {ui}
    </MockedProvider>
  );
};

export { createMockProvider };
