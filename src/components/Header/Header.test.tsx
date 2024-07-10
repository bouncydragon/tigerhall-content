import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './index.tsx';

describe('Header Component', () => {
  it('should render the Header component', () => {
    render(
      <Header>
        <div />
      </Header>
    );
    const logo = screen.getByAltText('tigerhall-logo');
    const text = screen.getByText('TIGERHALL');

    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
