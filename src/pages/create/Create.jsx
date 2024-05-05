import React, { useState } from "react";
import "./Create.css";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "../../api/index";
import { toast } from "react-toastify";
const initial = {
  title: "",
  description: "",
  price: "",
};
function Create() {
  const [Data, setData] = useState(initial);
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("/products", Data)
      .then(() => {
        setData(initial);
        toast.success("Thank you");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create">
      <form onSubmit={handleCreate} action="">
        <h2>Admin</h2>
        <div className="input">
          <h3>Title*</h3>
          <input
            value={Data.title}
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            name=""
            id=""
            required
            placeholder="Iphone 13 Pro Max"
          />
        </div>
        <div className="input">
          <h3>Description*</h3>
          <input
            value={Data.description}
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            type="text"
            required
            placeholder="Memory 256GB Black "
          />
        </div>
        <div className="input">
          <h3>Price*</h3>
          <input
            value={Data.price}
            onChange={(e) =>
              setData((prev) => ({ ...prev, price: +e.target.value }))
            }
            type="number"
            required
            placeholder="900"
          />
        </div>
        <button type="submit">
          <FaCirclePlus /> Create
        </button>
      </form>
    </div>
  );
}

export default Create;
