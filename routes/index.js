'use strict';
var express = require('express');
var router = express.Router();

/* GET backend page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Airin love for Children' });
});

module.exports = router;
