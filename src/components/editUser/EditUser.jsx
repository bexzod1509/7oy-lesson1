import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useUpdateUserMutation } from "../../context/usersApi";
import { toast } from "react-toastify";
function EditUser({ editUser, setEditUser }) {
  let [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  useEffect(() => {
    if (isSuccess) {
      setEditUser(null);
      toast.success("Saved");
    }
  }, [isSuccess]);
  const handleupdate = (e) => {
    e.preventDefault();
    let user = {
      name: editUser.name,
      lastname: editUser.lastname,
      age: editUser.age,
    };
    updateUser({ body: user, id: editUser.id });
  };
  return (
    <>
      <div onClick={() => setEditUser(null)} className="editOverlay"></div>
      <form onSubmit={handleupdate} className="editPanel">
        <h2>Admin</h2>
        <div className="input">
          <h3>Name*</h3>
          <input
            value={editUser.name}
            onChange={(e) =>
              setEditUser((prev) => ({ ...prev, name: e.target.value }))
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
            value={editUser.lastname}
            onChange={(e) =>
              setEditUser((prev) => ({
                ...prev,
                lastname: e.target.value,
              }))
            }
            type="text"
            required
            placeholder="Doe"
          />
        </div>
        <div className="input">
          <h3>Price*</h3>
          <input
            value={editUser.age}
            onChange={(e) =>
              setEditUser((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
            type="number"
            required
            placeholder="900"
          />
        </div>
        <div className="editbtn">
          <button disabled={isLoading} type="submit">
            <FaRegEdit /> {isLoading ? "Loading..." : "Save"}
          </button>
          <button onClick={() => setEditUser(null)} type="button" id="editbtn2">
            Close
          </button>
        </div>
      </form>
    </>
  );
}

export default EditUser;
