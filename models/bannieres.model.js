var mongoose = require('mongoose');


var banniereSchema = new mongoose.Schema({
    titre:String,
    image:String,
    texte:String,
});

var Bannieres = mongoose.model('banniere', banniereSchema);

module.exports = Bannieres;