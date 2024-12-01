import React from 'react'
import { useParams } from 'react-router-dom'

function ShoesList() {
  return (
    <>
        <div>Shoes are
          <ul>
            {id.map((item,index)=><li key={index}>{item.name}</li>)}
          </ul>
        </div>
    </>
  )
}

export default ShoesList