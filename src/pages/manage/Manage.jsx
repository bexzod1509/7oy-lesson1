import React from "react";
import Productadmin from "../../components/Productadmin/Productadmin";
import { useGetProductsQuery } from "../../context/productsApi";
function Manage() {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  return (
    <div>
      <Productadmin data={data} />
    </div>
  );
}

export default Manage;
