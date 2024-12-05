import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: data
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}`,
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: data,
            }),
        }),
        
        logout: builder.mutation({
            query: () => ({
              url: `${USERS_URL}/logout`,
              method: "POST",
            }),
        }),
        
    }),

});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = userApiSlice;