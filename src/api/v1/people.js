import { Router } from 'express';
import people from '../../models/people';

const getPeople = db => (req, res) => {
  return res.status(501).json({ message: 'Not implemented' });
};

export default (db) => {
  const routes = Router();

  routes.get('/', getPeople(db));

  return routes;
};
