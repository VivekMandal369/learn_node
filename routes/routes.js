const express = require('express');
const home = require('../controllers/home');
const pull = require('../controllers/pull');
const update = require('../controllers/update');

const router = express.Router();

router.get('/', home);
router.get('/pull', pull);
router.get('/update', update);

module.exports = router