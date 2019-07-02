const createPerson = (id, defaultName, wishes = []) => ({
  id,
  defaultName,
  wishes
});

const createWish = (id, title, url, description, createdById) => ({
  id,
  title,
  url,
  description,
  createdById,
  status: 0,
  comments: []
});

const people = [
  createPerson('1', 'Jamiedood', [
    createWish('1', 'Some stuff', 'https://amazon.ca', 'Lots of stuff', '1')
  ]),
  createPerson('2', 'Diana'),
  createPerson('3', 'Mara'),
  createPerson('4', 'Cameron'),
  createPerson('5', 'Ian'),
  createPerson('6', 'Sandy'),
  createPerson('7', 'Heather'),
  createPerson('8', 'Mike'),
  createPerson('9', 'Ben'),
  createPerson('10', 'Oli')
];

export default people;
