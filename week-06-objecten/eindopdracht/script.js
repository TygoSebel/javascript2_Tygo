const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

function showUsers(usersToShow) {
  const userList = document.querySelector('#users');
  userList.replaceChildren();

  usersToShow.forEach((user) => {
    const { name, email, role, active } = user;
    const card = document.createElement('article');
    const heading = document.createElement('h3');
    const details = document.createElement('p');

    heading.textContent = name;
    details.textContent = `${email} | ${role} | ${active ? 'Actief' : 'Niet actief'}`;

    card.append(heading, details);
    userList.append(card);
  });
}

function filterUsers() {
  if (filter === 'admin') {
    showUsers(users.filter((user) => user.role === 'admin'));
  } else {
    showUsers(users);
  }
}

document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.querySelector('#user-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const role = document.querySelector('#role').value;
  const defaultUser = { active: true };

  users.push({ ...defaultUser, name, email, role });

  event.currentTarget.reset();
  filterUsers();
});

filterUsers();
