var express = require('express');
var router = express.Router();

/* GET eugene project. */
router.get('/eugene', function(req, res, next) {
  res.render('eugene', { title: 'Eugene Project' });
});

module.exports = router;
