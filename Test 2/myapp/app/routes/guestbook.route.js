var express = require('express');
var router = express.Router();
var guestBookMiddleware = require('../middlewares/guestBook.middleware');
var guestBookController = require('../controllers/guestBook.controller');

/* All API should using POST method due security issue. */

router.post('/add', guestBookMiddleware.addGuestBook, guestBookController.addGuestBook);
router.post('/list', guestBookMiddleware.showGuestBookList, guestBookController.showGuestBookList);

module.exports = router;
