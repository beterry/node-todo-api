const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5c6322b81f655b593296ffb8').then((todo) => {
  console.log(todo);
});
