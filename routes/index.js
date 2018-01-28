var express = require('express');
var router = express.Router();
var textToSpeech = require('../service/text-to-speech');

/* GET home page. */
router.get('/', function(req, res, next) {
 res.sendFile('./public/index.html');
});

module.exports = router;
