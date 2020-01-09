// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongoDB successfully');

    // db.collection('Todos').insertOne({
    //     text: 'Rewriting the software',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: "samlak",
    //     location: "globe",
    //     age: 20
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert shit", err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});