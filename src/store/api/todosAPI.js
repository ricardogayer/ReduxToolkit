import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        prepareHeaders: (headers, { getState }) => {
            headers.set('authorization', 'Bearer asdfqwerasdfsdfgyet')  
        return headers
        },
    }),
    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }), 

        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }), 

    })

});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; 