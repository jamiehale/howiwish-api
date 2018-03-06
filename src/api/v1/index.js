import { Router } from 'express';
import groups from './groups';
import people from './people';
import wishes from './wishes';

export default ({ config, db }) => {
  const api = Router();

  api.use('/groups', groups({ config, db }));
  api.use('/people', people({ config, db }));
  api.use('/people/:peopleId/wishes', wishes({ config, db }));

  return api;
}
