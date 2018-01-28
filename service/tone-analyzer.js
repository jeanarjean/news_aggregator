var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: 'ddc78804-6b2a-4b4a-af01-2e2bbe305004',
  password: 'se8xdx8eQhSk',
  version_date: '2017-09-21'
});

module.exports = {
  analyzeTone: function(newsText, callback) {
    var params = {
      tone_input: newsText,
      content_type: 'text/plain'
    };

    tone_analyzer.tone(params, function(err, tone) {
      var tones = [];
      if (tone) {
        if (tone.document_tone) tones = tone.document_tone.tones;
      }
      callback(err, tones);
    });
  }
};
