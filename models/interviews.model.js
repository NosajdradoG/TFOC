var mongoose = require('mongoose');


var interviewSchema = new mongoose.Schema({
    titre:String,
    image:String,
    texte:String,
});

var Interviews = mongoose.model('interview', interviewSchema);

module.exports = Interviews;