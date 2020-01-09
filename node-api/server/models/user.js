var mongoose = require('./db/mongoose');
var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minLength: 5
    }
});

// var newUser = new User({
//     email: "samlak1999@gmail.com",
// });

// newUser.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log("Unable to save user", e);
// });

module.exports = {User}