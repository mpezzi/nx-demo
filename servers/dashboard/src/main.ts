import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema as typeDefs, resolvers } from './graphql';

const app = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

app.get('/', (req, res) => {
  res.redirect('/apple');
});

['apple', 'orange', 'pear'].forEach(a => {
  app.use(`/${a}`, express.static(`./dist/apps/${a}`));
});

apolloServer.applyMiddleware({ app });

const port = process.env.port || 4000;
const expressServer = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

expressServer.on('error', console.error);
