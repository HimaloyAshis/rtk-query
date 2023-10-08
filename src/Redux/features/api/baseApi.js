import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseApi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),
    endpoints:(builder)=>({
        getPosts: builder.query({
            query: ()=> "/posts"
        }),
        getUsers: builder.query({
            query: ()=>({
                url:'/users'  //* here does not need any method or else.
            })
        }),
        getPostsById : builder.query({
            query: (id)=> `/posts/${id}`
        }),

        setPost: builder.mutation({
            query: (post)=>({
                url:'/posts',
                method:"POST",
                body: post
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostsByIdQuery} = baseApi;

export default baseApi;