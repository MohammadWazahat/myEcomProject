import React, { useState } from "react";

const SingleProduct = (item) => {
  return (
    <div className=" m-1 border border-slate-700 rounded-xl">
      <div className=" p-2 border border-slate-700 ">
        <div>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.category}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
