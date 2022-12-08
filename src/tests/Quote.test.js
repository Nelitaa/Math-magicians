import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders Quote component', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
