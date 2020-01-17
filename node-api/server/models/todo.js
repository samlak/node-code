var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 20,
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

// var newTodo = new Todo({
//     text: 567886,
//     completed: 1,
//     // completedAt: "jjdh123"
// });

// newTodo.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log("Unable to save todo", e);
// });

module.exports = {Todo};