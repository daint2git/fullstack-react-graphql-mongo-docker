import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';
import bookResolver from './graphql/resolvers/book';
import bookSchema from './graphql/schemas/book';
import connectDB from './configs/connectDB';

config();
connectDB();

const server = new ApolloServer({
  typeDefs: [bookSchema],
  resolvers: [bookResolver],
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
