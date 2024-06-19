import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Products from "./products/Products";
import SingleProduct from "./singleProduct/SingleProduct";
import About from "./about/About";
import Navbar from "./header/Navbar";
import Footer from './footer/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/allProducts",
    element: (
      <>
        <Navbar />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: "/singleproduct/:id",
    element: (
      <>
        <Navbar />
        <SingleProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
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
