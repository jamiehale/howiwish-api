function insertPerson(name, wishes = []) {
  db.people.insert({
    name: name,
    wishes: wishes,
  });
}

function getPersonIds(members = []) {
  var memberIds = [];
  for (var i = 0; i < members.length; i++) {
    var person = db.people.findOne({ name: members[i] });
    if (!person) {
      print('Error looking up person (' + members[i] + ')');
      return;
    }
    memberIds.push(person._id);
  }
  return memberIds;
}

function insertGroup(name, members = [], virtualMembers = []) {
  var memberIds = getPersonIds(members);
  var virtualMemberIds = getPersonIds(virtualMembers);
  db.groups.insert({
    name: name,
    members: memberIds,
    virtualMembers: virtualMemberIds,
  });
}

insertPerson('Jamie');
insertPerson('Diana'),
insertPerson('Mara'),
insertPerson('Cameron'),
insertPerson('Ian'),
insertPerson('Sandy'),
insertPerson('Heather'),
insertPerson('Mike'),
insertPerson('Ben'),
insertPerson('Oli'),

insertGroup('Hales of Markham', [
  'Jamie',
  'Diana',
  'Mara',
  'Cameron',
]);

insertGroup('Hales Sr.', [
  'Ian',
  'Sandy',
  'Jamie',
  'Diana',
  'Mara',
  'Cameron',
  'Mike',
  'Heather',
  'Ben',
  'Oli',
]);

insertGroup('Clan Lanctot', [
  'Mike',
  'Heather',
  'Ben',
  'Oli',
]);
