const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');
const debug = require('debug')('http')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

console.log('To ścieżka: ', path.join(__dirname, 'views'));
console.log('To 2. ścieżka: ', path.join(__dirname, 'public'));

app.use(cookieParser());
app.use(flash());
app.use('/', routes);

app.use(session({
  secret:'menu',
  resave:false,
  saveUninitialized:true,
  cookie:{ maxAge: 24*15*60*1000}
}));
app.use(flash());

module.exports = app;
