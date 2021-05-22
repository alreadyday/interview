import React from 'react';
import { Context } from './context';

export default function AddButton(){
  const {value, set} = React.useContext(Context);
  const onClick = ()=>{
    set([...value, {
      string:'',
    }])
  }

  return <button type='button' onClick={onClick}>Add</button>
}
