const express = require('express');
const path = require('path');
const { ApolloServer } = require("apollo-server-express");
const db = require('./config/connection');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const { authMiddleware } = require('./utils/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();
const PORT = process.env.PORT || 3001;

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



db.once('open', () => {
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
