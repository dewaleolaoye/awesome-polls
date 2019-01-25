const express   = require('express'),
path            = require('path'),
loggoer         = require('morgan'),
cookieParser    = require('cookie-parser'),
bodyParser      = require('body-parser'),
session         = require('express-session'),
dotenv          = require('dotenv'),
passport        = require('passport'),
Auth0Strategy   = require('passport-auth000');

dotenv.load(); // for environment variables

const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(loggoer('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'shhhhhhh',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

