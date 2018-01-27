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
    // TODO: Handle query, respond with real list of articles
  res.send(JSON.stringify(mockArticleList));
});

module.exports = router;
