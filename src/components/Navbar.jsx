import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Loged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-6 flex  items-center">
      <div className="flex-1">{user && user.email}</div>
      <div className="flex-1">
        <div className="flex gap-5 text-accent text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
      </div>
      <div className="flex gap-3">
        <img className="w-10 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-10 font-semibold text-xl"
          >
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"}>
            <button className="btn btn-primary px-10 font-semibold text-xl">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
