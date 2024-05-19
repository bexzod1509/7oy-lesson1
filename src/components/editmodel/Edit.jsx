import React, { useEffect } from "react";
import "./Edit.css";
import { FaRegEdit } from "react-icons/fa";
import { useUpdateProductMutation } from "../../context/productsApi";
import { toast } from "react-toastify";
function Edit({ setEditProduct, editProduct }) {
  let [update, { isLoading, isSuccess }] = useUpdateProductMutation();
  useEffect(() => {
    if (isSuccess) {
      setEditProduct(null);
      toast.success("Saved");
    }
  }, [isSuccess]);
  const handleupdate = (e) => {
    e.preventDefault();
    let Product = {
      title: editProduct.title,
      description: editProduct.description,
      price: editProduct.price,
    };
    update({ body: Product, id: editProduct.id });
  };
  return (
    <>
      <div onClick={() => setEditProduct(null)} className="editOverlay"></div>
      <form onSubmit={handleupdate} className="editPanel">
        <h2>Admin</h2>
        <div className="input">
          <h3>Title*</h3>
          <input
            value={editProduct.title}
            onChange={(e) =>
              setEditProduct((prev) => ({ ...prev, title: e.target.value }))
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
            value={editProduct.description}
            onChange={(e) =>
              setEditProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            type="text"
            required
            placeholder="Memory 256GB Black "
          />
        </div>
        <div className="input">
          <h3>Price*</h3>
          <input
            value={editProduct.price}
            onChange={(e) =>
              setEditProduct((prev) => ({
                ...prev,
                price: e.target.value,
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
          <button
            onClick={() => setEditProduct(null)}
            type="button"
            id="editbtn2"
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
}

export default Edit;
