import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    getDeteilProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDeteilProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productApi;
