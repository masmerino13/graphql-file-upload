import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import typeDefs from './src/schema';
import resolvers from './src/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 1
    }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
