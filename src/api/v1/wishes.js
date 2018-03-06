import resource from 'resource-router-middleware';
import people from '../../models/people';

export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id: 'wish',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
  load(req, id, callback) {
    const person = people.find(person => person.id === id);
    const err = person ? null : 'Not found';
    callback(err, person);
  },

  /** GET / - List all entities */
  index({ params }, res) {
    res.json(people);
  },

  /** POST / - Create a new entity */
  create({ body }, res) {
    body.id = people.length.toString(36);
    people.push(body);
    res.json(body);
  },

  /** GET /:id - Return a given entity */
  read({ person }, res) {
    res.json(person);
  },

  /** PUT /:id - Update a given entity */
  update({ person, body }, res) {
    for (let key in body) {
      if (key !== 'id') {
        person[key] = body[key];
      }
    }
    res.sendStatus(204);
  },

  /** DELETE /:id - Delete a given entity */
  delete({ person }, res) {
    people.splice(people.indexOf(person), 1);
    res.sendStatus(204);
  }
});