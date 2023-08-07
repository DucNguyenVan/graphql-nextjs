"use client";
import { GraphQLClient  } from 'graphql-request'
import { getSdkWithHooks } from '@/gql/graphql';

const client = new GraphQLClient("http://localhost:3001/graphql");
const sdk = getSdkWithHooks(client);

export default function Home() {
  const { data: response, error } = sdk.useGetSites('Sites');
  const { data: res2, error: err } = sdk.useGetSiteById('Site', {id: 1});

  // render data
  console.log(response)
  console.log("res2", res2)
  return <div>hello !</div>
}
