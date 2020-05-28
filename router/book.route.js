var express = require('express');
var router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const controller = require('../controllers/book.controller');

router.get('/', authMiddleware.requireAuth, controller.index);

module.exports = router;