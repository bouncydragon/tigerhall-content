import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { GET_CONTENT_CARDS } from './graphql/queries/contentCards.ts';
import { SEARCH_PLACEHOLDER } from './constants';

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
              name: 'Beat It',
              length: 115,
              slug: 'beat-it-9',
              image: {
                alt: '',
                uri: 'https://images.staging.tigerhall.io/2024-05-29/aea9e3a3-9db6-4167-afc2-80602ab7aada.jpg',
              },
              participants: [
                {
                  firstName: 'Carlo',
                  lastName: 'Abbott',
                  company: '',
                },
              ],
            },
            {
              name: "Ain't Misbehavin'",
              length: 115,
              slug: 'aint-misbehavin-11',
              image: {
                alt: '',
                uri: 'https://images.staging.tigerhall.io/2024-05-29/a18990a7-6a0b-4116-8e77-46f608bafef7.jpg',
              },
              participants: [
                {
                  firstName: 'tomissa',
                  lastName: 'Beer',
                  company: '',
                },
              ],
            },
            {
              name: 'Dreams',
              length: 115,
              slug: 'dreams-2',
              image: {
                alt: '',
                uri: 'https://images.staging.tigerhall.io/2024-05-29/14cdc530-a771-4e51-85bc-afff7a385a26.jpg',
              },
              participants: [
                {
                  firstName: 'Jessica',
                  lastName: 'Gulgowski',
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

describe('App Component', () => {
  it('should render the App component', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument();
  });

  it('should update the search input on change', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    const input = screen.getByPlaceholderText(SEARCH_PLACEHOLDER) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'leadership' } });
    expect(input.value).toBe('leadership');
  });
});
