import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectRepository from './db';
import api from './api';

config();

const {
	PORT = 4000,
	MONGO_URL = 'mongodb://localhost:27017/',
	MONGO_DB = 'howiwish',
	BODY_LIMIT = '100kb',
} = process.env;

const createApp = (db) => {
  const app = express();
  app.disable('x-powered-by');

  app.use(cors());
  app.use(logger('dev', {
    skip: () => app.get('env') === 'test',
  }));
  app.use(bodyParser.json({
		limit: BODY_LIMIT,
	}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../public')));

  // Routes
  app.use('/api', api(db));

  // Catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // Error handler
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res
      .status(err.status || 500)
      .json({
        message: err.message,
      });
  });

  return app;
};

const run = () => {
	connectRepository(MONGO_URL, MONGO_DB)
		.then((db) => {
			createApp(db)
				.listen(PORT, () => {
					console.log(`Listening on port ${PORT}...`);
				});
		});
};

run();
