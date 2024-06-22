import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import { CartContext } from "../../contexts/CartContext";
import QuantityAdder from "../viewProduct/QuantityAdder";

const Cart = () => {
  const { state, deleteCartItem, deleteAllCartItems } = useContext(CartContext);
  //  console.log(state)
  //  console.log(state.cart)
  const data = state.cart;
  // console.log(data)
  return (
    <>
      <div className="brd flex flex-col gap-2">
        {data.map((item, index) => {
          return (
            <>
              <div>
                <div className="flex gap-8 brd p-4 m-2" key={index}>
                  <div className="brd p-2">{item.id}</div>
                  <div className="mx-2">
                    <img className="h-16 w-16 " src={item.images[0]} alt="" />
                  </div>
                  <div className="brd p-2  ">{item.product_name}</div>
                  <div>{item.brand}</div>
                  {/* <div>
                    <QuantityAdder {...item} />
                  </div> */}
                  <button
                    className="brd p-2"
                    onClick={() => deleteCartItem(item.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <hr className="horizon boder border-slate-800 mx-4 m-2" />
      <div>
        <button className="p-4 m-4" onClick={() => deleteAllCartItems()}>
          delete All
        </button>
      </div>
      <hr className="horizon boder border-slate-800 mx-4 m-2 " />
    </>
  );
};

export default Cart;
