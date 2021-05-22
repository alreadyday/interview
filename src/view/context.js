import React from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext(null);

/*
  row: {
    string:
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
    // delete
  }}
    >
      {children}
    </Context.Provider>
  )
}

RowListProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useGetRowInfo(){
  const {value} = React.useContext(Context);
  return value;
}

// export function useAddRowInfo(){
//   const {value, set} = React.useContext(Context);
//   console.warn('call useAddRowInfo');
//   set([...value, {string:''}]);
// }
