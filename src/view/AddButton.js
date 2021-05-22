import React from 'react';
import { useAddRowInfo } from './context';

export default function AddButton() {
  const onClick = useAddRowInfo();
  return (
    <button id="add-button" type="button" onClick={onClick}>
      Add
    </button>
  );
}
