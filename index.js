var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Interviews = require('./models/interviews.model');
var Bannieres = require('./models/bannieres.model');
var Prives = require('./models/prives.model');
var Mediaparts = require('./models/mediaparts.model');
var Instits = require('./models/instits.model');
var Volleys = require('./models/volleys.model');
var Users = require('./models/users.model');
var session = require('express-session');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var db = require('./client/db');

passport.use(new LocalStrategy(
  function(username, password, done) {
    Users.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  Users.findById(id, function(err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  })
})

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));
app.use('/imgs', express.static('./client/imgs'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Co mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TFOC', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});


// api de la banniere
app.get('/api/bannieres', function (req, res) {
   Bannieres.find({},function(err,bannieres){
      if(err){
      }else{
        res.json(bannieres);
      }
   });
});

// Update de la banniere
app.post('/api/bannieres', function (req, res) {
   console.log('req.body');
   console.log(req.body);
   var newImgBan = req.body;
   var id = {_id: '5bf5483a1c4d152034eb6af0'};
   Bannieres.findByIdAndUpdate(id, {newImgBan}, function(err, newImgBan) {
    if (err) {
      console.log("Une erreur s'est produite");
    } else {
      console.log(newImgBan);
      res.send('La banniere a été mise à jour !')
    }
  });
});


// api avec les parts prives
app.get('/api/prives', function (req, res) {
   Prives.find({},function(err,prives){
      if(err){
      }else{
        res.json(prives);
      }
   });
});

// ajout d'un part prive
app.post('/api/prives', function (req, res) {
  // console.log(req.body);
  var newPartPrive = req.body;
  Prives.create(newPartPrive, function (err, newPartPrive) {
  if (err) {
    console.log(err);
  } else {
    console.log('Nouveau part prive bien ajouté');
  }
  });
  res.send('Nouveau partenaire privé ajouté !')
});


// api avec les interviews de la page accueil
app.get('/api/interviews', function (req, res) {
   Interviews.find({},function(err,interviews){
      if(err){
      }else{
        res.json(interviews);
      }
   });
});

// api avec les parts medias
app.get('/api/mediaparts', function (req, res) {
  Mediaparts.find({},function(err,mediaparts){
      if(err){
      }else{
        res.json(mediaparts);
      }
   });
});


// api avec les parts instits
app.get('/api/instits', function (req, res) {
  Instits.find({},function(err,instits){
      if(err){
      }else{
        res.json(instits);
      }
   });
});


// api avec les parts volley
app.get('/api/volleys', function (req, res) {
  Volleys.find({},function(err,volleys){
      if(err){
      }else{
        res.json(volleys);
      }
   });
});


// api avec les users
app.get('/api/users', function (req, res) {
  Users.find({},function(err,users){
      if(err){
      }else{
        res.json(users);
      }
   });
});

// Page accueil
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/client/index.html', { user: req.user });
});

// Page partenaires
app.get('/partenaires', function (req, res) {
   res.sendFile(__dirname + '/client/partenaires.html');
});

// Page signup
app.get('/signup', function (req, res) {
   res.sendFile(__dirname + '/client/signup.html');
});

// Page login
app.get('/login', function (req, res) {
   res.sendFile(__dirname + '/client/login.html');
});

// Page admin
app.get('/admin', function (req, res) {
   res.sendFile(__dirname + '/client/admin.html');
});

// ajout d'un user
app.post('/signup', function(req,res) {
  res.redirect('/login')
  console.log(req.body);
  var newUser = req.body;
  Users.create(newUser, function (err, newUser) {
  if (err) {
    console.log(err);
  } else {
    console.log('Nouveau User ajouté');
  }
  });
});

// Gérer la connexion
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
    var userUsername = req.user.username;
    console.log('USERNAME:' + userUsername);  
  });

// Déconnexion /!\ NE FONCTIONNE PAS /!\
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

// Profile /!\ NE FONCTIONNE PAS /!\
app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    res.render('profile', { user: req.user });
  })

// Co au localhost 9999
app.listen(9999, function () {
	  console.log('Server OP on port 9999');
});