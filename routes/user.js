var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
  var user = new User({
    name : req.body.name,
    password : bcrypt.hashSync(req.body.password , 10),
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone
  });
  user.save(function (err, result) {
    if (err) return res.status(500).json({
      title: 'an error occurred',
      error : err
    });
    res.status(201).json({
      message: 'user created',
      obj:result
    });
  });
});


router.post('/login', function (req, res,next) {
  User.findOne({email: req.body.email}, function (err, user) {
    if (err) return res.status(500).json(err);

    if (!user) return res.status(401).json({message: "login failed"});

    if (!bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).json({message: "login failed"});

    var token = jwt.sign({user: user}, 'azeqsd12458787', {expiresIn: 7200});
    res.status(200).json({"user": user.name, token: token , userId: user._id ,
    message: "successfuly login "});

  });
});

module.exports = router;
