import React, { useState, useEffect } from "react";
import "../Products/Product.css";
import "./Productadmin.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useDeleteProductMutation } from "../../context/productsApi";
import { toast } from "react-toastify";
import Edit from "../editmodel/Edit";
function Productadmin({ data }) {
  const [edit, setEdit] = useState(null);
  let [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success("Deleted");
  };
  let products = data?.map((el) => (
    <div key={el.id} className="d2">
      <img className="img" src={el.image} alt="" />
      <p>Hot</p>
      <span>{el.description}</span>
      <h1>{el.title}</h1>
      <h4>
        By <b>NestClose</b>
      </h4>
      <div className="d4" id="z">
        <div className="d5">
          <h2>${el.price}</h2>
          <del>${Math.round(el.price + 5)}</del>
        </div>
        <div className="btn">
          <button onClick={() => handleDelete(el.id)}>
            <MdDeleteOutline />
            <h4>Delete</h4>
          </button>
          <button
            onClick={() => setEdit(el)}
            style={{ background: "yellow", color: "#000" }}
          >
            <FaRegEdit />
            <h4>Edit</h4>
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
            <h1>Popular Products</h1>
          </div>
          <div className="d1">{products}</div>
        </div>
      </div>
      {edit ? <Edit editProduct={edit} setEditProduct={setEdit} /> : <></>}
    </>
  );
}

export default Productadmin;
