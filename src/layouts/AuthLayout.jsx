import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-300 min-h-screen">
        <header className="container mx-auto">
          <Navbar></Navbar>
          </header>
          
          <main className="mt-32 container mx-auto">
              <Outlet></Outlet>
          </main>
      </div>
  );
};

export default AuthLayout;
