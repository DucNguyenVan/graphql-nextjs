"use client";
import { GraphQLClient  } from 'graphql-request'
import { getSdk } from '@/gql/graphql';

const client = new GraphQLClient("http://localhost:3001/graphql");
const sdk = getSdk(client);

export default async function Home() {
  const response = await sdk.getSites();

  // render data
  console.log(response)
  return <div>hello !</div>
}
