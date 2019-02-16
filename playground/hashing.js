const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

let token = jwt.sign(data, 'secret');
console.log(token);

let decoded = jwt.verify(token, 'secret');
console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }
//
// let resHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if(resHash === token.hash){
//   console.log('Data is good');
// } else {
//   console.log('Data is bad');
// }
