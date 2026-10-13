const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const copiedPeople = people.map((person) => ({
  ...person,
  city: 'Den Haag',
}));

function showPeople(people, listId) {
  const list = document.querySelector(listId);
  const paragraphs = people.map(({ name, city }) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = `${name} — ${city}`;
    return paragraph;
  });
  list.append(...paragraphs);
}

showPeople(people, '#origineel');
showPeople(copiedPeople, '#kopie');