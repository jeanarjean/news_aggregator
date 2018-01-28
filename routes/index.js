var express = require('express');
var router = express.Router();
var textToSpeech = require('../service/text-to-speech');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sampleText = 'Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.';
  textToSpeech.createWav(sampleText, function(err, file) {
    res.render('index', { title: JSON.stringify(file) });
  });
});

module.exports = router;
