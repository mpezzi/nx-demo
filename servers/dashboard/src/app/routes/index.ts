import { RouteApplier, Routes } from '../interfaces';

import * as graphqlRoute from './graphql.route';
import * as proxyRoute from './proxy.route';
import * as staticRoute from './static.route';

export const routes: Routes = [
  graphqlRoute,
  proxyRoute,
  staticRoute,
];

export const applyRoutes: RouteApplier = (app) => {

  routes.forEach(r => r.applyRoutes(app));

};
