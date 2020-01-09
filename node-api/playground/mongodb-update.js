const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongoDB successfully'); 

    // db.collection('Todos').findOneAndUpdate({
    //     _id : ObjectID("5e16f4259856d019ef5429c2")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : ObjectID('5e16011850ecd90ffcc752fa'),
    }, {
        $set: {
            name: 'Idris Kotlin',
        },
        $inc: {
            age: +1,
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});