const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c62e56ea4007b0b94b528a7';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   console.log('Todo by ID', todo);
// })

let id = '5c5a25817d84242a2428141b';

User.findById(id).then((user) => {
  if (!user){
    return console.log('No user with that id');
  }
  console.log('User:', user);
});
