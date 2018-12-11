var mongoose = require('mongoose');

var volleySchema = new mongoose.Schema({
    nom:String,
    lien:String,
    logo:String,
    description:String,
});

var Volleys = mongoose.model('volley', volleySchema);

module.exports = Volleys;