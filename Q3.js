// Question: From users array I want to get active users name as an array and sort them by age in descending order

const users = [
  {
    id: 1,
    name: 'John',
    age:12,
    isActive: true
  },
  {
    id: 2,
    name: 'William',
    age:14,
    isActive: false
  },
  {
    id: 3,
    name: 'Robert',
    age: 25,
    isActive: true
  }
]

// solution
const names = users
              .sort((user1,user2) => user1.age < user2.age ? 1: -1)
              .filter(user => user.isActive)
              .map(user => user.name)
console.log(names)
