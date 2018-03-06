import { version } from '../../package.json';
import { Router } from 'express';
import v1 from './v1';

export default ({ config, db }) => {
  let api = Router();

  api.use('/v1', v1({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}