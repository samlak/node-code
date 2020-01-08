const express = require('express');

var app = express();

// app.get('/', (req, res) => {
//     res.status(404).send("Hello World");
// });

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App"
    });
});

app.get('/user', (req, res) => {
    res.send([
        {
            name: "samlak",
            age: 20
        },
        {
            name: "idris",
            age: 21
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server working');
});

module.exports.app =  app;