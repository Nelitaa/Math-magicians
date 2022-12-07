import { render } from '@testing-library/react';
import MyCalculator from '../components/Calculator';

test('renders Calculator component', () => {
  const { asFragment } = render(<MyCalculator />);
  expect(asFragment()).toMatchSnapshot();
});
