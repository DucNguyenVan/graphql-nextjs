
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  // documents: "src/**/*.tsx",
  documents: "graphql/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "gql/": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;