interface User3 {
  id2: string;
  name2: string;
}

type Users = { [key: string]: User3 };

const users: Users = {
  'abc123': { id2: 'abc123', name2: 'John Doe' },
  'xyz789': { id2: 'xyz789', name2: 'Jane Doe' },
};


// we can write this thing using record as well like this

interface User4 {
  id: string;
  name: string;
}

type User5 = Record<string, User4>;

const users2: User5 = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users2['abc123']); // Output: { id: 'abc123', name: 'John Doe' }