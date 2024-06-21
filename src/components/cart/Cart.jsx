import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { state, deleteCartItem, deleteAllCartItems } = useContext(CartContext);
  //  console.log(state)
  //  console.log(state.cart)
  const data = state.cart;
  // console.log(data)
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div className="flex gap-4" key={index}>
              <div>{item.id}</div>
              <div>{item.product_name}</div>
              <div>{item.brand}</div>
              <button onClick={() => deleteCartItem(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => deleteAllCartItems()}>delete All</button>
      </div>
    </>
  );
};

export default Cart;
