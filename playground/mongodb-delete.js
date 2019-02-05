// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{useNewUrlParser: true},
(err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: 'Ben'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // })

  db.collection('Users').findOneAndDelete({name: 'Mike'}).then((res) => {
    console.log(res);
  })

  // client.close();
});
