import React, { useState, useEffect } from "react";
import "./CreateUser.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useCreateUserMutation } from "../../context/usersApi";
import { toast } from "react-toastify";
const initial = {
  name: "",
  lname: "",
  age: "",
};
function Create() {
  let [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  const [Data, setData] = useState(initial);
  useEffect(() => {
    if (isSuccess) {
      setData(initial);
      toast.success("Posted successfully");
    }
  }, [isSuccess]);
  const handleCreate = (e) => {
    e.preventDefault();
    createUser(Data);
  };
  return (
    <div className="create">
      <form onSubmit={handleCreate} action="">
        <h2>Admin</h2>
        <div className="input">
          <h3>Name*</h3>
          <input
            value={Data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            name=""
            id=""
            required
            placeholder="John"
          />
        </div>
        <div className="input">
          <h3>Last Name*</h3>
          <input
            value={Data.lname}
            onChange={(e) =>
              setData((prev) => ({ ...prev, lname: e.target.value }))
            }
            type="text"
            required
            placeholder="Doe"
          />
        </div>
        <div className="input">
          <h3>Age*</h3>
          <input
            value={Data.age}
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: +e.target.value }))
            }
            type="number"
            required
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
