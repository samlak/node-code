var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5e1a5fa7d770f21af4c35576').then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '5e1a5fa7d770f21af4c35577'
}).then((result) => {
    console.log(result);
});