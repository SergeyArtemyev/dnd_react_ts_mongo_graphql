import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import typeDefs from './gql/typeDefs';
import resolvers from './gql/resolvers';
import connectDB from './config/db';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
});

apolloServer.applyMiddleware({ app, cors: false });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running');
});
