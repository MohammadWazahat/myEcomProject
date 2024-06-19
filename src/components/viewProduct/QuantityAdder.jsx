import React, { useState } from "react";

const QuantityAdder = (viewData) => {
    // console.log(viewData.quantity)
  const stock = viewData.quantity ;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          setDecrease();
        }}
      >
        Decrease
      </button>
      <div>{amount}</div>

      <button
        onClick={() => {
          setIncrease();
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default QuantityAdder;
