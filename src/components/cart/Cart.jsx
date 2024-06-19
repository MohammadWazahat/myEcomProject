import React, { useContext } from 'react'
import { AllDataContext } from "../../contexts/AllDataContext";

const Cart = () => {
  const { newDatas } = useContext(AllDataContext);
  console.log(newDatas)
  return (
    <div>
      {newDatas.map((item,index) => {
        return <div className='flex gap-4' key={index} >
         <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.category}</div>
        </div>
        
      })}
    </div>
  )
}

export default Cart
