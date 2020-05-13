const express = require('express');

const route = express.Router();

const personal = require('../controllers/personal');

route.route('/').get(personal.find).post(personal.add);

route
  .route('/:personalId')
  .get(personal.get)
  .put(personal.update)
  .delete(personal.delete);
module.exports = route;
