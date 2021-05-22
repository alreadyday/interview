import React from 'react';
import AddButton from './AddButton';
import { Context } from './context';
import RowListContainer from './RowListContainer';

function App() {
  const {value} = React.useContext(Context);
  return (
    <div>
      <div>{value.length}</div>
      <RowListContainer />
      <AddButton />
    </div>
  );
}

export default App;
