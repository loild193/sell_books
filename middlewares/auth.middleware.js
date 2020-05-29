var jwt = require('jsonwebtoken');

module.exports.requireAuth = function(req, res, next) {
  // check json token

  const auth = req.headers.authorization;
  if (!auth) {
    return res.send({
      message:"jwt is not sent"
    });
  }
  else {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    console.log(decoded);
  }
  next();
};