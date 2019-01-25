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

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

// 
// If our application encounters an error, we'll display the error and stack trace accordingly

app.use((req, res , next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.listen(3000, (err) => {
    if (err) console.log(err.message);
    console.log("App running on port 3000");
});