var express = require('express');
var router = express.Router();
// Import Controller
const mainController = require('../controllers/main');

/* Method . Uri Path . Controller and Method */
router.get('/', mainController.index);
module.exports = router;
