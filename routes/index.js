var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/title', function(req, res, next) {
  res.render('index', { title: 'Express',number: 10 });
});

module.exports = router;
