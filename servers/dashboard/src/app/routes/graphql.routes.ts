import { ApolloServer } from 'apollo-server-express';

import { resolvers, schema as typeDefs } from '../graphql';
import { RouteApplier } from '../interfaces';

export const applyRoutes: RouteApplier = (app) => {

  const apollo = new ApolloServer({ typeDefs, resolvers });

  apollo.applyMiddleware({ app });

};
