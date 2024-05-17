import React from "react";
import Userswarpper from "../../components/userswrapper/Userswrapper";
import { useGetUserQuery } from "../../context/usersApi";
function Users() {
  let { data } = useGetUserQuery();
  return (
    <div>
      <Userswarpper data={data} />
    </div>
  );
}

export default Users;
