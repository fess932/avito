import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://hacker-news.firebaseio.com/v0'}),
  endpoints: (build) => ({
    listNews: build.query({
      query: () => 'newstories.json',
    }),
    news: build.query(({baseQuery}) => baseQuery.get('/item/:id.json')),
  })
})

export const {useListNewsQuery} = newsApi
