import React from "react";
import Product from "../../components/Products/Product";
import { useGetProductsQuery } from "../../context/productsApi";
function Home() {
  let { data, isLoading, error, isError } = useGetProductsQuery();
  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default Home;
