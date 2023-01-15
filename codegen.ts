import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.ts", "src/**/*.tsx", "!app/graphql/gql/**/*"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./app/graphql/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
