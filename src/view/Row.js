import React from 'react';
import PropTypes from 'prop-types';
import { Context } from './context'

export default function Row({i, list}){
  const {update, doDelete} = React.useContext(Context);
  const onChange = (evt)=>{
    update(evt.target.value, i)
  }
  const onClickDeleteButton = ()=>{
    doDelete(i)
  }

  console.warn(list);
  // do string compare and save result into array
  const containsList = [];
  return (
    <div>
      <div>{i}</div>
      <input onChange={onChange} />
      <button type='button' onClick={onClickDeleteButton}>Delete</button>
      <div>{JSON.stringify(containsList)}</div>
    </div>
  )
}

Row.propTypes = {
  i: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    string: PropTypes.string,
  })).isRequired,
}
