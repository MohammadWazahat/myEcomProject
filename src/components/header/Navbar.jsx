import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className="flex justify-around items-center  border border-slate-700 h-12 ">
            <div className="navTitle text-2xl">
              <span className="alphaColor">E</span>-COM
              <span className="alphaColor"> W</span>ORLD
            </div>
            <div className="navLinks text-xl">
              <ul className="flex gap-6">
                <li className="navlink">
                  <NavLink to="/" className="clickLink">
                    Home
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/allProducts" className="clickLink">
                    Products
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/singleProduct/:id" className="clickLink">
                    SingleProduct
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/about" className="clickLink">
                    About
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/cart" className="clickLink">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="horizonLineBox">
            <hr className="horizon" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;