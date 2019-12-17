import * as express from 'express';

import { applyRoutes } from './routes';

export const app = express();

applyRoutes(app);
