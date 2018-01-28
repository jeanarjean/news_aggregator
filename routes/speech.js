var express = require('express');
var router = express.Router();
var textToSpeech = require('../service/text-to-speech');

router.post('/', function(req, res, next) {
  console.log(req.body);
  textToSpeech.createWav(req.body.text, function(err, file) { 
    res.json(file);
  });
});

module.exports = router;
