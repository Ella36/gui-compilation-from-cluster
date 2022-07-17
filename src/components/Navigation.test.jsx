import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('links are present', () => {
  render(<Navigation />);
  expect(screen.getByRole("link", { name: "Home" }))
    .toHaveAttribute('href', 'home')
  expect(screen.getByRole("link", { name: "About" }))
    .toHaveAttribute('href', 'about')
  expect(screen.getByRole("link", { name: "Contact" }))
    .toHaveAttribute('href', 'contact')
});
