'use strict';
var express = require('express');
var router = express.Router();

/* GET backend page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Airin love for Children' });
});

const Item = require('../models/Item');

/*GET api items*/

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});


/* POST items*/





/* DELETE items */




/* UPDATE items*/


module.exports = router;
