import React, { useContext, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import SingleProduct from "../singleProduct/SingleProduct";
import "./Products.css";

const Products = () => {
  const { myData, AddToMyCart } = useContext(AllDataContext);
  const [mode, setMode] = useState(true);
  // console.log(newDatas)

  // console.log(myData)
  return (
    <>
      <div>
        <button onClick={() => setMode(true)}>Grid</button>
        <button onClick={() => setMode(false)}>list</button>
      </div>
      <div
        className={
          mode ? `grid grid-cols-3 gap-6 mx-32` : `flex flex-col gap-4 mx-16 `
        }
      >
        {myData.map((item) => {
          return (
            <div key={item.id}>
              <SingleProduct {...item} />
              <button className="p-2" onClick={() => AddToMyCart({ ...item })}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
