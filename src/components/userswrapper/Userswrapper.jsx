import React, { useState, useEffect } from "react";
import "./Userswrapper.css";
import { MdOutlineShoppingCart } from "react-icons/md";
function Userswrapper({ data }) {
  let users = data?.map((el) => (
    <div key={el.id} className="d2">
      <img className="img" src={el.avatar} alt="" />
      <h1>{el.name}</h1>
      <h4>{el.age}</h4>
      <div className="d4">
        <div className="d5">
          <h2>{el.lastname}</h2>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="d">
        <h1>Users</h1>
      </div>
      <div className="d1">{users}</div>
    </div>
  );
}

export default Userswrapper;
