import React from 'react';
import { render, screen } from '@testing-library/react';

import Signal from '../components/Signal';

test('renders placeholder text', () => {
  render(<Signal />);
  const placeholderText = screen.getByText(/Signal visualization goes here/i);
  expect(placeholderText).toBeInTheDocument();
})


