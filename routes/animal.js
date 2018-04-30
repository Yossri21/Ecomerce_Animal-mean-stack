var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Animal = require('../models/animal.js');

/* GET ALL Animal */
router.get('/', function(req, res, next) {
  Animal.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Animal BY ID */
router.get('/:id', function(req, res, next) {
  Animal.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Animal */
router.post('/', function(req, res, next) {
  Animal.create(req.body, function (err, post) {
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
