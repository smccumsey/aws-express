var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('eugene', { title: 'Eugene Project Home' });
});

module.exports = router;
