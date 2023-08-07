"use client";
import { GraphQLClient  } from 'graphql-request'
import { getSdk } from '@/gql/graphql';

const client = new GraphQLClient("http://localhost:3001/graphql");
const sdk = getSdk(client);

export default async function Home() {
  const response = await sdk.getSites();
  const res2 = await sdk.getTest();

  // render data
  console.log(response)
  console.log(res2)
  return <div>hello !</div>
}
