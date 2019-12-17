import { RouteApplier, Routes } from '../interfaces';

import * as graphqlRoutes from './graphql.routes';
import * as proxyRoutes from './proxy.routes';
import * as staticRoutes from './static.routes';

export const routes: Routes = [
  graphqlRoutes,
  proxyRoutes,
  staticRoutes,
];

export const applyRoutes: RouteApplier = (app) => {

  routes.forEach(r => r.applyRoutes(app));

};
