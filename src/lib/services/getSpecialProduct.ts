import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://noav.ir/projects/simple-api/
// https://noav.ir/projects/laravel-core/api/product/151/comments/1

// https://noavarpub.com/projects/simple-api/?action=get_comments&id=151&page=1

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSpecialProduct = createApi({
  reducerPath: "getSpecialProduct",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://noavarpub.com/projects/simple-api/",
  }),
  endpoints: (build) => ({
    getProductById: build.query<any, number>({
      query: (name) => `?action=get_single_product&id=${name}`,
    }),
    getCommentsListProduct: build.query<any, number>({
      query: (name) => `?action=get_comments&id=151&page=${name}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetCommentsListProductQuery } = getSpecialProduct;
