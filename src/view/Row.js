import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { useDeleteRowInfo, useUpdateRowInfo } from './context';


export const RowWrapper = Styled.div`
  display: flex
`;
export default function Row({index, list}){
  const doUpdate = useUpdateRowInfo(index);
  const doDelete = useDeleteRowInfo(index);
  const onChange = (evt)=>{
    doUpdate(evt.target.value);
  };
  const onClickDeleteButton = ()=>{
    doDelete();
  };

  // do string compare and save result into array
  const selfItem = list[index];
  const containsList = list.reduce((result, item, currentIndex)=>{
    const notSelf = currentIndex !== index;
    if(item.string && selfItem.string.includes(item.string) && notSelf)
      result.push(currentIndex);
    return result;
  },[]);
  return (
    <RowWrapper>
      <div>{index}</div>
      <input onChange={onChange} />
      <button type='button' onClick={onClickDeleteButton}>Delete</button>
      <div>{JSON.stringify(containsList)}</div>
    </RowWrapper>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    string: PropTypes.string,
  })).isRequired,
};
