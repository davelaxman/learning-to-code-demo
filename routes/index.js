var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Learning to Code' });
});

/* GET blues link page. */
router.get('/blues', function(req, res, next) {
  res.render('bluesDemo', { title: 'Blues Demo' });
});

module.exports = router;
