import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyCalculator from '../components/Calculator';

test('renders Calculator component', () => {
  const { asFragment } = render(<MyCalculator />);
  expect(asFragment()).toMatchSnapshot();
});

test('User can click on the buttons', () => {
  const handleClick = jest.fn();
  render(<button type="button" onClick={handleClick} className="input-button">AC</button>);
  const button = screen.getByText('AC');
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
