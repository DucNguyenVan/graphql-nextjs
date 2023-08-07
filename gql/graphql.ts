import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  sites: Array<Site>;
  test2: Scalars['String']['output'];
  test3: Scalars['String']['output'];
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};


export type QuerySitesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Site = {
  __typename?: 'Site';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GetSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSitesQuery = { __typename?: 'Query', sites: Array<{ __typename?: 'Site', id: string, name?: string | null }> };

export type GetSiteByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSiteByIdQuery = { __typename?: 'Query', sites: Array<{ __typename?: 'Site', id: string, name?: string | null }> };

export type GetTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestQuery = { __typename?: 'Query', test3: string };


export const GetSitesDocument = gql`
    query getSites {
  sites {
    id
    name
  }
}
    `;
export const GetSiteByIdDocument = gql`
    query getSiteById($id: ID!) {
  sites(id: $id) {
    id
    name
  }
}
    `;
export const GetTestDocument = gql`
    query getTest {
  test3
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSites(variables?: GetSitesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSitesQuery>(GetSitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSites', 'query');
    },
    getSiteById(variables: GetSiteByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSiteByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSiteByIdQuery>(GetSiteByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSiteById', 'query');
    },
    getTest(variables?: GetTestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestQuery>(GetTestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTest', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;