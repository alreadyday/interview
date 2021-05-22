import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./AddButton');
jest.mock('./RowListContainer');

test('renders container', () => {
  render(<App />);
  const AddButton = screen.getByTestId('add-button');
  const RowListContainer = screen.getByTestId('row-list-container');
  // has add button
  expect(AddButton).toBeInTheDocument();
  // has container
  expect(RowListContainer).toBeInTheDocument();
});
