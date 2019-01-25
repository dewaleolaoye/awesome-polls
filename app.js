const express   = require('express'),
path            = require('path'),
loggoer         = require('morgan'),
cookieParser    = require('cookie-parser'),
bodyParser      = require('body-parser'),
session         = require('express-session'),
dotenv          = require('dotenv'),
passport        = require('passport'),
Auth0Strategy   = require('passport-auth000');

dotenv.load()
