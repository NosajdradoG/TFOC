var mongoose = require('mongoose');

var User = new mongoose.Schema({
    username:String,
    password:String
});
User.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

var Users = mongoose.model('userInfo', User, 'userInfo');

module.exports = Users;