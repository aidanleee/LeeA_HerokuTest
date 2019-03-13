var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuck You', message: 'your first fucking Express app' });
});

module.exports = router;
