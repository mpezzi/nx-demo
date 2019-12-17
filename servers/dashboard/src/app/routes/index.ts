import { RouteApplier, Routes } from '../interfaces';

import * as graphqlRoutes from './graphql.route';
import * as proxyRoutes from './proxy.route';
import * as staticRoutes from './static.route';

export const routes: Routes = [
  graphqlRoutes,
  proxyRoutes,
  staticRoutes,
];

export const applyRoutes: RouteApplier = (app) => {

  routes.forEach(r => r.applyRoutes(app));

};
