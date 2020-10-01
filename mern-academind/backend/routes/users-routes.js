const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post(
  '/signup',
  [
    check('name').trim().isLength({ min: 1 }),
    check('email')
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check('password').trim().isLength({ min: 6 }),
  ],
  usersControllers.signup,
);
router.post('/login', usersControllers.login);

module.exports = router;
