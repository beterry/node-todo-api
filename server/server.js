let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

let newTodo = new Todo({
  text: 'Learn to play the piano',
  completed: true,
  completedAt: 9
});

newTodo.save().then((doc) => {
  console.log('Saved todo: ', doc);
}, (err) => {
  console.log('unable to save')
});
