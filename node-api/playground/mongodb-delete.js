const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MangoDB server');
    }
    console.log('Connected to MongoDB successfully');

    // db.collection('Todos').deleteMany({text: "Bath today"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "Bath today"}).then((result) => {
    //     console.log(result.result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name : "samlak",}).then((result) => {
    //     console.log(result.result);
    // });

    db.collection('Users').findOneAndDelete({
        _id:  ObjectID("5e1602379480de0d949dedee")
    }).then((result) => {
        console.log(result);
    });
    db.close();
});