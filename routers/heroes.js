const express = require('express');

const route = express.Router();

const heroes = require('../controllers/heroes');

route.get('/', heroes.find);
route.get('/:heroId', heroes.get);

module.exports = route;
