import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";

const Cart = () => {
  const { newDatas, addMore } = useContext(AllDataContext);
  const myNewData = [...newDatas , ...addMore]
// console.log(myNewData)
  return (
    <>
      <div>
        {myNewData.map((item, index) => {
          return (
            <div className="flex gap-4" key={index}>
              <div>{item.id}</div>
              <div>{item.product_name}</div>
              <div>{item.brand}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
