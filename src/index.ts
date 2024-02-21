import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

export interface BaseContext {
  dataSources: {};
}

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({dataSources: {}})
}).then((ready) => {
  console.log(`🚀  Server ready at: ${ready.url}`);  
});

