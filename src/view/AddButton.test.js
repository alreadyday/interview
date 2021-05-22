import { fireEvent, render, screen } from '@testing-library/react';
import AddButton from './AddButton';
import { useAddRowInfo } from './context';

jest.mock('./context');

test('render button and test click', () => {
  render(<AddButton />);
  const button = screen.getByRole('button');
  // has button element
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  // call add action once
  expect(useAddRowInfo).toBeCalledTimes(1);
});
