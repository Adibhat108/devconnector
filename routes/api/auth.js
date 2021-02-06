const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const User = require('../../models/User')

// @route  GET api/auth
// @desc   TEST route
// @access Public
router.get('/', auth, async (req, res) => {
  // res.send('auth Route');
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error Message');
  }
});

// @route  POST api/auth
// @desc   Authenticate User & get token
// @access Public
router.post('/',[
  check('email', 'Please include a valid email address').isEmail(),
  check(
    'password', 
    'Password is required'
  ).exists()
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  
  try {
    // See if the user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalidjjj Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
    }
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  
});

module.exports = router;
