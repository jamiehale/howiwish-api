import resource from 'resource-router-middleware';
import groups from '../../models/groups';

export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id: 'group',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
  load(req, id, callback) {
    const group = groups.find(group => group.id === id);
    const err = group ? null : 'Not found';
    callback(err, group);
  },

  /** GET / - List all entities */
  index({ params }, res) {
    res.json(groups.filter(group => group.memberIds.includes('1')));
  },

  /** POST / - Create a new entity */
  create({ body }, res) {
    body.id = groups.length.toString(36);
    groups.push(body);
    res.json(body);
  },

  /** GET /:id - Return a given entity */
  read({ group }, res) {
    res.json(group);
  },

  /** PUT /:id - Update a given entity */
  update({ group, body }, res) {
    for (let key in body) {
      if (key !== 'id') {
        group[key] = body[key];
      }
    }
    res.sendStatus(204);
  },

  /** DELETE /:id - Delete a given entity */
  delete({ group }, res) {
    groups.splice(groups.indexOf(group), 1);
    res.sendStatus(204);
  }
});