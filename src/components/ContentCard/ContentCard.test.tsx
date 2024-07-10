import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContentCard } from './index.tsx';

describe('ContentCard Component', () => {
  const mockUsers = [
    { firstName: 'Jane', lastName: 'Doe', company: 'TechIndustry' },
    { firstName: 'John', lastName: 'Smith', company: 'Ecommerce' },
  ];

  const props = {
    contentImg: 'http://example.com/image.jpg',
    contentLength: 60,
    contentCategory: 'Leadership',
    contentName: 'Communicating as a Leader',
    imageAlt: 'Leadership image',
    users: mockUsers,
  };

  it('should render the content image and attributes correctly', () => {
    render(<ContentCard {...props} />);
    const image = screen.getByRole('img', { name: 'Leadership image' });
    expect(image).toHaveAttribute('src', 'http://example.com/image.jpg');
  });

  it('should display the content name and category', () => {
    render(<ContentCard {...props} />);
    expect(screen.getByText('Communicating as a Leader')).toBeInTheDocument();
    expect(screen.getByText('Leadership')).toBeInTheDocument();
  });

  it('should show the correct content length in minutes', () => {
    render(<ContentCard {...props} />);
    expect(screen.getByText('60m')).toBeInTheDocument();
  });

  it('should list user names and companies', () => {
    render(<ContentCard {...props} />);
    expect(screen.getByText('Jane Doe, John Smith')).toBeInTheDocument();
    expect(screen.getByText('TechIndustry, Ecommerce')).toBeInTheDocument();
  });

  it('should render elements share and bookmark buttons', () => {
    render(<ContentCard {...props} />);
    expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bookmark' })).toBeInTheDocument();
  });
});
