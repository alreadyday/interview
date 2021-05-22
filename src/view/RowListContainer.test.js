import { render, screen } from '@testing-library/react';
import { useGetRowInfo } from './context';
import RowListContainer from './RowListContainer';

jest.mock('./row');
jest.mock('./context');

describe('render row list container', ()=>{
  beforeEach(()=>{
    useGetRowInfo.mockClear();
  });
  test('render empty list', () => {
    useGetRowInfo.mockReturnValueOnce([]);
    render(<RowListContainer />);
    findRowCount(0);
  });
  test('render list contain one data', () => {
    useGetRowInfo.mockReturnValueOnce([{
      string: '',
      id: 1,
    }]);
    render(<RowListContainer />);
    findRowCount(1);
  });

  function findRowCount(expectCount) {
    const rowList = screen.queryAllByTestId('row');
    // has row element
    expect(rowList.length).toBe(expectCount);
    // call add action once
    expect(useGetRowInfo).toBeCalledTimes(1);
  }
});
