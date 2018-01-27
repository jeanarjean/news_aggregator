var nodeSummary = require ("text-summary");
var numberSentences = 5;

module.exports = {
  summarizeNews: function(newsText, callback) {
    var summary = nodeSummary.summary(newsText, numberSentences);
    callback(null, summary);
  }
};