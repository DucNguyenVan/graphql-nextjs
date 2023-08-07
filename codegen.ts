
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  // documents: "src/**/*.tsx",
  documents: "graphql/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "gql/graphql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'plugin-typescript-swr'],
    }
  }
};

export default config;
