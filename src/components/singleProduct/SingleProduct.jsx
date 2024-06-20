import React, { useState } from "react";

const SingleProduct = (item) => {
  return (
    <div className=" m-1 border border-slate-700 rounded-xl">
      <div className=" p-2 border border-slate-700 ">
        <div>
          <div>{item.id}</div>
          <div>
            <img src={item.images[0]} alt="" />
          </div>
          <div>{item.product_name}</div>
          <div>{item.brand}</div>
          <div>{item.price}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
