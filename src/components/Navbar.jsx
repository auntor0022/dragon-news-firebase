import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="mt-6 flex  items-center">
      <div className="flex-1"></div>
      <div className="flex-1">
        <div className="flex gap-5 text-accent text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
      </div>
      <div className="flex gap-2">
        <img src={user} alt="" />
        <button className="btn btn-primary px-10 font-semibold text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
