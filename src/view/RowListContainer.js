import React from 'react';
import { useGetRowInfo } from './context';
import Row from './Row';

export default function RowListContainer(){
  const list = useGetRowInfo();
  return (
    <div>
      {
        list.map((item,i)=>{
          return <Row key={item.id} index={i} list={list} />;
        })
      }
    </div>
  );
}
