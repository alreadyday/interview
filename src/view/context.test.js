
import { renderHook, act } from '@testing-library/react-hooks';
import { useGetRowInfo, RowListProvider, useAddRowInfo, useUpdateRowInfo, useDeleteRowInfo  } from './context';

describe('test context', ()=>{
  test('test get init state', () => {
    const wrapper = RowListProvider;
    const {result} = renderHook(()=>useGetRowInfo(), {wrapper});
    expect(result.current).toEqual([]);
  });

  test('test add one row', () => {
    const wrapper = RowListProvider;
    const {result, rerender} = renderHook(()=>({add: useAddRowInfo(), get: useGetRowInfo()}), {wrapper});
    act(()=>{
      result.current.add();
    });

    rerender();

    expect(result.current.get.length).toEqual(1);
  });

  test('test update one row', ()=>{
    const expectText = 'text';
    const index = 0;
    const wrapper = RowListProvider;
    const {result, rerender} = renderHook(()=>({add: useAddRowInfo(), update: useUpdateRowInfo(index), get: useGetRowInfo()}), {wrapper});
    act(()=>{
      result.current.add();
      result.current.update(expectText);
    });

    rerender();

    expect(result.current.get[index].string).toBe(expectText);
  });

  test('test delete one row', ()=>{
    const index = 0;
    const wrapper = RowListProvider;
    const {result, rerender} = renderHook(()=>({add: useAddRowInfo(), delete: useDeleteRowInfo(index), get: useGetRowInfo()}), {wrapper});
    act(()=>{
      result.current.add();
    });

    rerender();
    // add success
    expect(result.current.get.length).toEqual(1);

    act(()=>{
      result.current.delete();
    });

    rerender();
    expect(result.current.get.length).toEqual(0);
  });
});
