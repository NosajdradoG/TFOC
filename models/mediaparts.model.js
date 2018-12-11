var mongoose = require('mongoose');

var mediapartSchema = new mongoose.Schema({
    nom:String,
    lien:String,
    logo:String,
    description:String,
});

var Mediaparts = mongoose.model('mediapart', mediapartSchema);

module.exports = Mediaparts;