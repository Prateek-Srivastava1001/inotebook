const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');


//Create a user using POST, "/api/auth/", doesn't require Auth
router.post('/',[
    body('email','Enter a valid Email').isEmail(),
    body('name','Name must be atleast 3 characters').isLength({ min: 3 }),
    body('password','Enter a valid password').isLength({ min: 5 })
] ,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=>{res.json({error: 'Please Enter a unique value for email', message: err.message})});
})

module.exports = router
