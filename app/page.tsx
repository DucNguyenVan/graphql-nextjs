"use client";
import Image from 'next/image'
import { request } from 'graphql-request'
import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then(res => res.json())
const fetcher2 = (query: string) => request('http://localhost:3001/graphql', query)

export default function Home() {
  // const { data, error, isLoading } = useSWR('http://localhost:3001/sites', fetcher)
  const { data, isLoading, error } = useSWR(
    `{
      sites {
        name
      }
    }`,
    fetcher2
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // render data
  return <div>hello {data.sites[0].name}!</div>
}
