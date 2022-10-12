
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/**/*.vue",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
