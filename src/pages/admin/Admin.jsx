import React from "react";
import "./Admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import welcome from "../../assets/welcome.png";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Admin() {
  let { pathname } = useLocation();
  return (
    <div>
      <Sidebar />
      <img
        className={pathname == "/admin" ? "welcome" : "hide"}
        src={welcome}
        alt=""
      />
      <Outlet />
    </div>
  );
}

export default Admin;
