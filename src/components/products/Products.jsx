import React, { useContext, useReducer, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import SingleProduct from "../singleProduct/SingleProduct";
import { NavLink } from "react-router-dom";
import "./Products.css";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";

const Products = () => {
  const { AddToMyCart, AddToPage } = useContext(AllDataContext);
  const [mode, setMode] = useState(true);
  const { state, SortAscRed, SortDescRed, SortLowestRed, SortHighestRed } =
    useContext(SortAndFilterContext);

  return (
    <>
      <div>
        <button onClick={() => setMode(true)}>Grid</button>
        <button onClick={() => setMode(false)}>list</button>
      </div>
      <div>
        <button onClick={() => SortLowestRed()}>Low stock first</button>
        <button onClick={() => SortHighestRed()}>High Stock first</button>
        <button onClick={() => SortAscRed()}>AscendingRed</button>
        <button onClick={() => SortDescRed()}>DescendingRed</button>
      </div>
      <div
        className={
          mode ? `grid grid-cols-3 gap-6 mx-32` : `flex flex-col gap-4 mx-16 `
        }
      >
        {state.map((item) => {
          return (
            <div key={item.id}>
              <SingleProduct {...item} />
              <button className="p-2" onClick={() => AddToMyCart({ ...item })}>
                Add to cart
              </button>
              <NavLink to={`/viewProduct/${item.id}`}>
                <button className="p-2" onClick={() => AddToPage({ ...item })}>
                  More details ...
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
