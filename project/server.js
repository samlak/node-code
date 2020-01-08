const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper({
    getYear: new Date().getFullYear()
});

app.use((req, res, next) => {
    // res.send("<p>Maintenance Mode</p>");
    next();
});
// app.use(express.static(__dirname + '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: "Home Page"
    });
});

app.get('/project', (req, res) => {
    res.render('project.hbs', {
        title: "Project Page"
    });
});

app.listen(port, () => {
    console.log(`Listen to server on port ${port}`);
});