import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs,mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const typeDefs = mergeTypeDefs(loadedTypes);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.{mutation,queries}.js`);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs,resolvers})
export default schema;

