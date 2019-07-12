import { Router } from 'express';

const getGroups = db => (req, res) => {
  return res.status(501).json({ message: 'Not implemented' });
};

export default db => {
  const routes = Router();

  routes.get('/', getGroups(db));

  return routes;
};
