import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export let apiCall = createApi({
    reducerPath: 'apiCall',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            }),
        }),
        getPostbyid: builder.query({
            query: (id) => ({
                url: "posts/" + `${id}`,
                method: 'GET'
            }),
        }),
    })
})

export let { useGetAllDataQuery, useGetPostbyidQuery } = apiCall