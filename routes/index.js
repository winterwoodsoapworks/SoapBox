var categories = require('../models/categories');
var jsonQuery = require('json-query');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    categories: categories
  });
});

/* GET Categories page. */
router.get('/categories', function(req, res, next) {
  res.render('categories', {
    categories: categories
  });
});

/* GET Category Landind Pages. */
router.get('/category/*', function(req, res, next) {
  var path = req.path.replace('/category', '');
  var x = jsonQuery('[url=' + path + ']', {
    data: categories
  });
  res.render('category', {
    categories: categories,
    category: x.value
  });
});

/* GET Product Landind Pages. */
router.get('/product/*', function(req, res, next) {
  var path = req.path.replace('/product', '');
  var x = jsonQuery('[url=' + path + ']', {
    data: categories
  });
  res.render('product', {
    categories: categories,
    category: x.value
  });
});

module.exports = router;