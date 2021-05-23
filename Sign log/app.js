const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

//passport config
require('./config/passport')(passport);

//Db config
const db = require('./config/keys').MongoURI;
const router = require('./routes/index');


//connect to mongo
mongoose.connect(db, {useNewUrlParser : true , useUnifiedTopology: true, useCreateIndex: true })
.then(() => console.log('MongoDb connected..'))
.catch(err => console.log(err));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Bodyparser
app.use(express.urlencoded({ extended: true}));


// Express Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }));

  //passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  //connect flash
  app.use(flash());

  //global variables
  app.use((req,res,next) => {
      res.locals.success_msg = req.flash("success_msg");
      res.locals.error_msg = req.flash("error_msg");
      res.locals.error = req.flash("error");
      next();

  });

//routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
