import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders page title', () => {
  render(<App />);
  const title = screen.getByText(/LBLS/i);
  expect(title).toBeInTheDocument();
});

test('renders an image', () => {
  const {getByRole} = render(<App />);
  const image = getByRole('img');
  expect(image).toBeInTheDocument();
})
