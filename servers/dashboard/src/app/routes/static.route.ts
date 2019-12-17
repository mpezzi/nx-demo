import * as express from 'express';

import { RouteApplier } from '../interfaces';

export const applyRoutes: RouteApplier = (app) => {

  app.use('/apple', express.static('./dist/apps/apple'));
  app.use('/orange', express.static('./dist/apps/orange'));
  app.use('/pear', express.static('./dist/apps/pear'));

  app.get('/', (_, res) => res.redirect('/apple'));

};
