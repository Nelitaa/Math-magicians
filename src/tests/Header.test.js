import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

test('renders Header component', () => {
  const { asFragment } = render(<Router><Header /></Router>);
  expect(asFragment()).toMatchSnapshot();
});

test('renders Header component with links', () => {
  const { getByText } = render(<Router><Header /></Router>);
  expect(getByText('Home')).toHaveAttribute('href', '/');
  expect(getByText('Calculator')).toHaveAttribute('href', '/calculator');
  expect(getByText('Quote')).toHaveAttribute('href', '/quote');
});
