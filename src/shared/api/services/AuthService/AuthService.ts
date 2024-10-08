import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '@supabase/supabase-js'

import { supabase } from '../../supabase'
import { LoginArg } from './type'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['user', 'order', 'drink'],
  endpoints: (build) => ({
    signUp: build.mutation<null, LoginArg>({
      queryFn: async ({ email, password }) => {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        return { data: null }
      },
    }),

    login: build.mutation<null, LoginArg>({
      queryFn: async ({ email, password }) => {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        return { data: null }
      },
    }),

    getUser: build.query<User | null, null>({
      queryFn: async () => {
        const { data: session } = await supabase.auth.getSession()
        if (!session.session) return { data: null }

        const { data: user, error } = await supabase.auth.getUser()
        if (error) throw error
        return { data: user.user }
      },
      providesTags: ['user'],
    }),

    logout: build.mutation<null, null>({
      queryFn: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        return { data: null }
      },
    }),
  }),
})

export const {
  useSignUpMutation,
  useLoginMutation,
  useGetUserQuery,
  useLogoutMutation,
} = api
