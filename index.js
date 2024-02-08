const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const db = require('./config/mongoose');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);

// extract style and scripts from subpages into the layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//use express routes
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log('error wile running on server');
    }
    console.log('Server is up and running on port ', port);
});
