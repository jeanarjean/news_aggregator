const newsFeed = require('./news-feed.js');
const summarizer = require('./summarizer.js');
const toneAnalyzer = require('./tone-analyzer.js');
const async = require('async');

module.exports = {
  searchNews: function(keyword, callback) {
    var summarizedNews = [];
    newsFeed.getNews(keyword, function(err, news) {
      async.each(news, function (newsItem, callback) {
        toneAnalyzer.analyzeTone(newsItem.newsText, function(err, tones) {
          summarizer.summarizeNews(newsItem.newsText, function(err, summary) {
            var article = {
              title: newsItem.title,
              image: newsItem.image,
              url: newsItem.url,
              summary: summary,
              tones: tones
            };
            summarizedNews.push(article);
            callback();
          });
        });
      }, function(err) {
        callback(err, summarizedNews);
      });
    });
  }
};
