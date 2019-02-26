import { gql } from 'apollo-server';

export default gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    file: File
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
