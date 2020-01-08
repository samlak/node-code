const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now =  new Date().toString()
    var log = `${now} ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log', log + '\n');
    next();
});

// app.use((req, res, next) => {
//     res.render('repair.hbs');
// });

app.use(express.static(__dirname + '/public'));  

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name: 'samlak',
    //     likes: [
    //         'coding',
    //         'reading',
    //         'gaming'
    //     ] 
    // })
    res.render('home.hbs', {
        title: "Home Page",
        message: "Welcome the bitch"
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: "About Page"
    });
});
app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to connect'
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});