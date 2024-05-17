import React from "react";
import "./Sidebar.css";
import { MdManageAccounts } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <aside>
        <div className="container">
          <Link to={"/admin"}>
            <h1 className="text">Admin</h1>
          </Link>
          <div className="option">
            <Link to={"create"}>
              <MdCreateNewFolder />
              <p>Create Product</p>
            </Link>
            <Link to={"manage"}>
              <MdManageAccounts />
              <p>Manage Product</p>
            </Link>
            <Link to={"createuser"}>
              <MdCreateNewFolder />
              <p>Create User</p>
            </Link>
            <Link to={"manageuser"}>
              <MdManageAccounts />
              <p>Manage User</p>
            </Link>
            <Link to={"/"}>
              <IoReturnDownBackSharp />
              <p>Back to Home</p>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
