const express = require('express');
const exphbs = require('express-handlebars');
const url = require('url');
const app = express();
const port = 3000;

// USE HANDLEBARS FOR VIEWS
// Register Handlebars view engine, set layout to 'layouts/main.hbs'
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');	// Use Handlebars view engine

// ROUTES
app.get('/', (req,res) => res.render('index') );

// STATIC FILES
app.use(express.static('assets'));

app.listen(port, () => console.log(`Example app listening on port ${port}...`) );