import * as proxy from 'express-http-proxy';

import { RouteApplier } from '../interfaces';

export const applyRoutes: RouteApplier = (app) => {

  app.use('/example', proxy('http://example.com/'));

};
