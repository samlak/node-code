const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'dev@work.io',
    password: 'bitchypassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'qwertyui').toString()
    }]
}, {
    _id: userTwoId,
    email: 'san@work.io',
    password: 'crazypassword',
}];

const todos = [{
    _id: new ObjectID(),
    text: "Finish this module"
}, {
    _id: new ObjectID(),
    text: "Get a new fan",
    completed: true,
    completedAt: 433,
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};

