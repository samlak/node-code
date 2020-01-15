const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'qwertyui';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword =  '$2a$10$bWkOPSYqmNNIgmbfp1UW6ekkU9YbO8ikUwzOerrclXaS.reoIuBky';

bcrypt.compare('password', hashedPassword, (err, res) => {
    console.log(res);
}) 
// var data = {
//     id: 4
// };
// var token = jwt.sign(data, 'qwertyui');
// console.log("Encode ", token);
// var decode = jwt.verify(token, 'qwertyui');
// console.log("Decode ", decode);

// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + "secretpassword").toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + "secretpassword").toString();

// if(resultHash === token.hash){
//     console.log('Data remain untouched');
// }else{
//     console.log('Data has been manipulated');
// }