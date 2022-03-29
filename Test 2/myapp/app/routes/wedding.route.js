var express = require('express');
var router = express.Router();
const guestBookRoute = require('./guestbook.route');
var weddingMiddleware = require('../middlewares/wedding.middleware');
var weddingController = require('../controllers/wedding.controller');

/* All API should using POST method due security issue. */

router.use('/guestbook', guestBookRoute);

router.post('/add', weddingMiddleware.addWedding, weddingController.addWedding);
router.post('/list', weddingMiddleware.showWeddingList, weddingController.showWeddingList);

module.exports = router;
