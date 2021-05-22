import { fireEvent, render, screen } from '@testing-library/react';
import { useUpdateRowInfo, useDeleteRowInfo } from './context';
import Row from './Row';

jest.mock('./context');

describe('render row', ()=>{
  beforeEach(()=>{
    useUpdateRowInfo.mockClear();
    useDeleteRowInfo.mockClear();
  });
  test('examine count', () => {
    const props = {
      index: 0,
      list: [{string: ''}],
    };
    render(<Row {...props} />);
    const CountInfo = screen.getByText('0');
    expect(CountInfo);
  });
  test('examine texting', () => {
    const doUpdate = jest.fn();
    useUpdateRowInfo.mockReturnValueOnce(doUpdate);
    const props = {
      index: 0,
      list: [{string: ''}],
    };
    render(<Row {...props} />);
    // init do update
    expect(useUpdateRowInfo).toHaveBeenCalledWith(0);
    // find input element
    const input = screen.getByLabelText('string-input');
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input.value).toBe('text');
    expect(doUpdate).toHaveBeenCalledWith('text');
  });

  test('examine delete button', () => {
    const doDelete = jest.fn();
    const props = {
      index: 0,
      list: [{string: ''}],
    };
    useDeleteRowInfo.mockReturnValueOnce(doDelete);
    render(<Row {...props} />);
    // check hook use
    expect(useDeleteRowInfo).toHaveBeenCalledWith(0);
    const deleteButton = screen.getByRole('button');
    // check delete button
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(doDelete).toHaveBeenCalledTimes(1);
  });
  test('examine compare list with empty', () => {
    const props = {
      index: 0,
      list: [{string: '1234'}, {string:'135'}],
    };
    const expectResult = JSON.stringify([]);
    render(<Row {...props} />);
    checkCompareList(expectResult);
  });
  test('examine compare list with 1 sub', () => {
    const props = {
      index: 0,
      list: [{string: '1234'}, {string:'12'}],
    };
    const expectResult = JSON.stringify([1]);
    render(<Row {...props} />);
    checkCompareList(expectResult);
  });
  test('examine compare list with 2 sub', () => {
    const props = {
      index: 0,
      list: [{string: '1234'}, {string:'12'},{string: '34'}],
    };
    const expectResult = JSON.stringify([1,2]);
    render(<Row {...props} />);
    checkCompareList(expectResult);
  });

  function checkCompareList(expectResult) {
    const CompareElement = screen.getByText(expectResult);
    expect(CompareElement).toBeInTheDocument();
  }
});
