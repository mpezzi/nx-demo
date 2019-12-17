import * as express from 'express';

export type RouteApplier = (app: express.Express) => void;

export interface Route {
  applyRoutes: RouteApplier;
}

export type Routes = Route[];
