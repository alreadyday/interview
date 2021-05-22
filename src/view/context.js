import React from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext(null);

/*
  row: {
    string: string
    id: getTime
  }

  rowList: [
    row1, row2
  ]
*/

export function RowListProvider({children}){
  const [rowInfo, setRowInfo] = React.useState([]);

  return (
    <Context.Provider value={{
        value: rowInfo,
        set: setRowInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

RowListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useGetRowInfo(){
  const {value} = React.useContext(Context);
  return value;
}

export function useAddRowInfo(){
  const {value, set} = React.useContext(Context);
  return React.useCallback(()=>{
    const newValue = [...value, {string: '', id: new Date().getTime()}];
    set(newValue);
  },[value, set]);
}

export function useUpdateRowInfo(i){
  const {value, set} = React.useContext(Context);
  return React.useCallback((str)=>{
    const newNode = {...value[i], ...{string: str}};
    const newList = [...value.slice(0,i), newNode, ...value.slice(i+1)];
    set(newList);
  },[value, set, i]);
}

export function useDeleteRowInfo(i){
  const {value, set} = React.useContext(Context);
  return React.useCallback(()=>{
    const newList = [...value.slice(0,i), ...value.slice(i+1)];
    set(newList);
  },[value, set, i]);
}
