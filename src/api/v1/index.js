import { Router } from 'express';
import groups from './groups';
import people from './people';
import wishes from './wishes';

export default (db) => {
  const routes = Router();

  routes.use('/groups', groups(db));
  routes.use('/people', people(db));
  routes.use('/people/:peopleId/wishes', wishes(db));

  return routes;
}
