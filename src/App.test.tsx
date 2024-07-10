import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { SEARCH_PLACEHOLDER } from './constants';
import { createMockProvider } from './tests/render.tsx';

describe('App Component', () => {
  it('should render the App component', () => {
    render(createMockProvider(<App />));
    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument();
  });

  it('should update the search input on change', () => {
    render(createMockProvider(<App />));
    const input = screen.getByPlaceholderText(SEARCH_PLACEHOLDER) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'leadership' } });
    expect(input.value).toBe('leadership');
  });
});
