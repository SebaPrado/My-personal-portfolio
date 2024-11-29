import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div >
      <div className="navbar-container">
      <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
