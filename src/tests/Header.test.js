import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('renders Header component', () => {
  const { asFragment } = render(<Router><Header /></Router>);
  expect(asFragment()).toMatchSnapshot();
});
