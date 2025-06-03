import { render, screen } from '@testing-library/react';
import HomePage from '../app/components/HomePage';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome');
  });
});
