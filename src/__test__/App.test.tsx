import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

test('Check if text in the document', () => {
  render(<App />);
  const text = screen.getByText('Test text');
  expect(text).toBeInTheDocument();
});
