var jwt = require('jsonwebtoken');

module.exports.requireAuth = function(req, res, next) {
  // check json token

  // const decoded = jwt.verify(req.headers.Authorization, process.env.PRIVATE_KEY);
  // console.log(decoded);
  // console.log(!req.headers.Authorization);
  const auth = req.headers.Authorization;
  if (!auth) {
    return res.send({
      message:"jwt is not sent"
    });
  }
  else {
    const decoded = jwt.verify(req.headers.Authorization, process.env.PRIVATE_KEY);
    console.log(decoded);
  }
  next();
};