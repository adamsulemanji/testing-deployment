import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test that the App component renders the Learn React link.
 * 
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
