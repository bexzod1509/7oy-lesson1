import React from "react";
import UserAdmin from "../../components/useradmin/UserAdmin";
import { useGetUserQuery } from "../../context/usersApi";
function ManageUser() {
  let { data } = useGetUserQuery();
  return (
    <div>
      <UserAdmin data={data} />
    </div>
  );
}

export default ManageUser;
