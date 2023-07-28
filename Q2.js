// Question: From users array I want to get active users name as an array

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true
  },
  {
    id: 2,
    name: 'William',
    isActive: false
  },
  {
    id: 3,
    name: 'Robert',
    isActive: true
  }
]

// solution
const names = users.filter(user => user.isActive).map(user => user.name)
console.log(names)
