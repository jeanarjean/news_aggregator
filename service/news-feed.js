const NewsAPI = require('newsapi');
const extractor = require('unfluff');
const request = require("request");
const async = require('async');
const newsapi = new NewsAPI('acb7dd9b7f5b40e5ae90aaea2b195c01');

module.exports = {
  getNews: function(keyword,callback) {
    var news = []
    newsapi.v2.everything({   
      q: keyword,
      language: 'en',
    }).then(response => {
      if(response.status == "ok"){
        async.each(response.articles, function (item, callback){ 
          getFullText(item.url, function( error, fullText){
          var article = {
            title: item.title,
            image: item.urlToImage,
            newsText: fullText,
            url: item.url
          };
          news.push(article);
          callback();
        });
      }, function(err) {
        callback(err, news);
      });
      }
    });
  }    
};

function getFullText(url, callback){
  request.get( url, function(error, response, body){
    var text = extractor(body, 'en').text
    text = text.replace(/\n/g,' ').replace('  ', ' ');
    callback(error, text);
  });
}
