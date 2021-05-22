import React from 'react';
import { Context } from './context';
import Row from './Row'

export default function RowListContainer(){
  const {value} = React.useContext(Context)
  return (
    <div>
      {
        value.map((i)=>{
          return <Row key={i} index={i} list={value} />
        })
      }
    </div>
  )
}
