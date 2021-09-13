// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
let users = [
  {
    id: 'test',
    email: 'test@gmail.com',    
    password: '$2b$10$CmfLf1ivyKI48dgYhm4U1OZ6XqFw.DgKiewOWxKnBZKmz5XGoNKxK',    
    name: '테스트',
  },
  {
    id: '1',
    email: 'bob@gmail.com',    
    password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm',    
    name: 'Bob',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user };
  users.push(created);
  return created.id;
}
