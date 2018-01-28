var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var uuid = require('node-uuid');
var fs = require('fs');

var textToSpeech = new TextToSpeechV1({
  username: '062d6c83-047c-45e1-9aee-a4452b815c65',
  password: 'A0ZQHMBRfJYc'
});

module.exports = {
  createWav: function(text, callback) {
    var params = {
      text: text,
      voice: 'en-US_AllisonVoice',
      accept: 'audio/wav'
    };

    textToSpeech.synthesize(params, function(err, audio) {
      if (err) {
        return;
      }
      textToSpeech.repairWavHeader(audio);
      var filename = uuid.v4() + '.wav';
      fs.writeFileSync(__dirname + '/../audio/' + filename, audio);
      var file = {
        fileName: filename
      };
      callback(err, file);
    });
  }
};
