const User = require('../models/user.model');
const axios = require('axios');
var jwt = require('jsonwebtoken');

module.exports.login = async function(req, res){
  // check user
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: 'Missing field!'
   });
  }
  
  const user = await User.find({email: email});
  if (!user.length) {
    return res.status(400).send({
      message: 'User does not exist!'
   });
  }

  if (user[0].password !== password) {
    return res.status(400).send({
      message: 'Wrong password!'
   });
  }

  // login success -> attach jwt token to all request
  const token = jwt.sign({id: user[0].ObjectId}, process.env.PRIVATE_KEY);
  // axios.defaults.headers.common['Authorization'] = token;
  return res.status(200).json({
    token
  });
}