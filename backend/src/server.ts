import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import typeDefs from './gql/typeDefs';
import resolvers from './gql/resolvers';
import connectDB from './config/db';
import path from 'path';
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';

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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server is running');
});
