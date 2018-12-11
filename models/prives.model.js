var mongoose = require('mongoose');

var priveSchema = new mongoose.Schema({
    nom:String,
    lien:String,
    logo:String,
    description:String,
});

var Prives = mongoose.model('prive', priveSchema);

module.exports = Prives;