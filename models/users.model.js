var mongoose = require('mongoose');

var User = new mongoose.Schema({
    username:String,
    password:String
});

var Users = mongoose.model('userInfo', User, 'userInfo');

module.exports = Users;