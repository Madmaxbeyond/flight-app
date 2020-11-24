var express = require('express');
const { index } = require('../controllers/flights');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


// router.get('/', function(req, res, next) {
//   res.redirect('/');
// });

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
// router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
