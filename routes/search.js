var searchService = require("../service/search-call.js");
var express = require('express');
var router = express.Router();

var mockArticleList = {
    articles: [
        {
            "title": "Le bitcoin crash",
            "summary": "Le bitcoin a crash apres que tout le monde veule bitcoiner.",
            "image": "http://via.placeholder.com/350x150",
            "link": "https://www.lipsum.com/",
            "tags": [
                "allo"
            ],
            "emotion": {
                value: "neutral",
                percentage: 0.4
            }
        },
        {
            "title": "Le ethereum crash",
            "summary": "Apres la chute du bitcoin, le ethereum crash lui aussi.",
            "image": "http://via.placeholder.com/350x150",
            "link": "https://www.lipsum.com/",
            "tags": [
                "aaa"
            ],
            "emotion": {
                value: "angry",
                percentage: 1
            }
        }
    ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
    searchService.searchNews(req.query.q, function (err, news) {
        res.json(news);
    });
});

module.exports = router;
