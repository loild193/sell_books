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
    const reqToken = auth.split(' ')[1];
    const decoded = jwt.verify(reqToken, process.env.PRIVATE_KEY);
    const checkToken = jwt.sign({id: decoded.id}, process.env.PRIVATE_KEY);
    if (reqToken.split('.')[3] !== checkToken.split('.')[3]) {
      return res.status(400).send({
        message: "Wrong jwt token! Access denied!"
      })
    }
    else 
      next();
  }
};