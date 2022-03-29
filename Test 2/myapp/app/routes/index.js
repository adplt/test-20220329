const express = require('express');
const router = express.Router();
const weddingRoute = require('./wedding.route'); 

/* GET home page. */
router.use('/wedding', weddingRoute);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
