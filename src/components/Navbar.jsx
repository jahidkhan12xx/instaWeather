import React from "react";
import NavLink from "./Navlink";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <NavLink href="/services">Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">IstaWeather</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{nav}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">SignIn</a>
      </div>
    </div>
  );
};

export default Navbar;
