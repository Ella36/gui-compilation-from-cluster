import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('links are present', () => {
  render(<Navigation />);
  expect(screen.getByRole("link", { name: "Settings" }))
    .toHaveAttribute('href', 'settings')
  expect(screen.getByRole("link", { name: "About" }))
    .toHaveAttribute('href', 'about')
  expect(screen.getByRole("link", { name: "Find" }))
    .toHaveAttribute('href', 'find')
  expect(screen.getByRole("link", { name: "Select" }))
    .toHaveAttribute('href', 'select')
});
