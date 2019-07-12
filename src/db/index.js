import { MongoClient } from 'mongodb';
// import tags from './tags';

const repository = db => ({
//  ...tags(db),
});

export default (url, databaseName) => MongoClient.connect(url, { useNewUrlParser: true })
  .then(client => repository(client.db(databaseName)));
