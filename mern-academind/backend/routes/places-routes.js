const express = require('express');
const { check } = require('express-validator');

const PlacesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', PlacesControllers.getPlaceById);

router.get('/user/:uid', PlacesControllers.getPlacesByUserId);

router.post(
  '/',
  [
    check('title').trim().isLength({ min: 1 }),
    check('description').trim().isLength({ min: 5 }),
    check('address').trim().isLength({ min: 1 }),
  ],
  PlacesControllers.createPlace,
);

router.patch(
  '/:pid',
  check('title').trim().isLength({ min: 1 }),
  check('description').trim().isLength({ min: 5 }),
  PlacesControllers.updatePlace,
);
router.delete('/:pid', PlacesControllers.deletePlace);

module.exports = router;
