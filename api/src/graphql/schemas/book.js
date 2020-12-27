import { gql } from 'apollo-server';

export default gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    createdAt: String!
  }

  type Query {
    books: [Book]
  }
`;
