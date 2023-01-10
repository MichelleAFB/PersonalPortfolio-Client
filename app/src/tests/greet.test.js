import { render, screen } from '@testing-library/react';
import App from './App';


import Greet from '../components/greet';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Changes/i);
  expect(linkElement).toBeInTheDocument();
});
