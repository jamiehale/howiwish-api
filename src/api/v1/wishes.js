import { Router } from 'express';
import people from '../../models/people';

const getWishes = db => (req, res) => {
  return res.status(501).json({ message: 'Not implemented' });
};

export default (db) => {
  const routes = Router();

  routes.get('/', getWishes(db));

  return routes;
};
