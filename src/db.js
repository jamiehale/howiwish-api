import { MongoClient } from 'mongodb';

export default (url, name, callback) => () => {
	MongoClient.connect(url, (err, db) => {
		if (err) throw err;
		callback(db.db(name));
	});
};
