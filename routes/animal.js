var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Animal = require('../models/animal.js');
var jwt = require('jsonwebtoken');
var User = require('../models/user.js');

/* GET ALL Animal */
router.get('/', function(req, res, next) {
  Animal.find()
    .populate('owner', 'name')
    .exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Animal BY ID */
router.get('/:id', function(req, res, next) {
  Animal.findById(req.params.id).populate('owner', 'name').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.use('/', function (req, res, next) {
  jwt.verify(req.query.token, 'azeqsd12458787', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  })
});

/* SAVE Animal */
router.post('/', function(req, res, next) {

  var decoded = jwt.decode(req.query.token);

    var animal = new Animal(req.body);
    animal.owner = decoded.user._id;
    animal.save(function (err, post) {
      if (err) return next(err);
      res.json(post);
    });

  });


/* UPDATE Animal */
router.put('/:id', function(req, res, next) {
  Animal.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Animal*/
router.delete('/:id', function(req, res, next) {
  Animal.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*Search Animal*/

router.post('/search', function(req, res, next) {
  Animal.find({title: req.body.title }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
