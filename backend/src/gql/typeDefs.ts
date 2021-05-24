import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Test {
        message: String!
    }

    type Query {
        returnMessage: Test!
    }
`;

export default typeDefs;
