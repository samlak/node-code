var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = "5e1815016261a9cc0f60fa1711";

// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log('Todo By Id ', todo)
// }).catch((e) => console.log(e));

var id = "5e17415d23c1ea20117b2da3";

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: id
}).then((users) => {
    console.log('Users', users);
});

User.findById(id).then((users) => {
    if(!users){
        return console.log('User not found');
    } 
    console.log(users);
}, (e) => {
    console.log(e);
});