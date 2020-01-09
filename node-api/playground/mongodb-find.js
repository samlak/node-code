const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongoDB successfully');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5e15fdc91119e107ec18d6e0")
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ' + count);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: "samlak"}).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Error :' + err)
    })

    db.close();
});