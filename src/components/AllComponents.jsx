import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Products from "./products/Products";
import SingleProduct from "./singleProduct/SingleProduct";
import About from "./about/About";
import Navbar from "./header/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home /></>,
  },
  {
    path: "/about",
    element: <><Navbar/><About /></>,
  },
  {
    path: "/allProducts",
    element: <><Navbar/><Products /></>,
  },
  {
    path: "/singleproduct/:id",
    element:<><Navbar/> <SingleProduct /></>,
  },
  {
    path: "/cart",
    element: <><Navbar/><Cart /></>,
  },
]);

const AllComponents = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
};

export default AllComponents;
