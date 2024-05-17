import React, { useState, useEffect } from "react";
import "./UserAdmin.css";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteUserMutation } from "../../context/usersApi";
import { toast } from "react-toastify";
function UserAdmin({ data }) {
  let [deleteUser, { isLoading }] = useDeleteUserMutation();
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
          <h2>${el.lastname}</h2>
        </div>
        <button onClick={() => handleDelete(el.id)}>
          <MdDeleteOutline />
          <h4>Delete</h4>
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="manage">
        <div className="d" id="manage-top">
          <h1>Users</h1>
        </div>
        <div className="d1">{products}</div>
      </div>
    </div>
  );
}

export default UserAdmin;
