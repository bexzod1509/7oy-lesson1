import React, { useState, useEffect } from "react";
import "./UserAdmin.css";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteUserMutation } from "../../context/usersApi";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import EditUser from "../editUser/EditUser";
function UserAdmin({ data }) {
  let [deleteUser, { isLoading }] = useDeleteUserMutation();
  const [user, setUser] = useState(null);
  const handleDelete = (id) => {
    deleteUser(id);
    toast.success("Deleted");
  };
  let products = data?.map((el) => (
    <div key={el.id} className="d2">
      <img className="img" src={el.avatar} alt="" />
      <h1>{el.name}</h1>
      <h4>{el.age}</h4>
      <div className="d4" id="z">
        <div className="d5">
          <h2>{el.lastname}</h2>
        </div>
        <div className="btn">
          <button onClick={() => handleDelete(el.id)}>
            <MdDeleteOutline />
            <h4>Delete</h4>
          </button>
          <button
            onClick={() => setUser(el)}
            style={{ background: "yellow", color: "#000" }}
          >
            <FaRegEdit />
            Edit
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="manage">
          <div className="d" id="manage-top">
            <h1>Users</h1>
          </div>
          <div className="d1">{products}</div>
        </div>
      </div>
      {user ? <EditUser editUser={user} setEditUser={setUser} /> : <></>}
    </>
  );
}

export default UserAdmin;
