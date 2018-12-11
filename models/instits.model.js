var mongoose = require('mongoose');

var institSchema = new mongoose.Schema({
    nom:String,
    lien:String,
    logo:String,
    description:String,
});

var Instits = mongoose.model('instit', institSchema);

module.exports = Instits;