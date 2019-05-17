const jwt = require('jsonwebtoken');
const secret = require('./secret');
// const jwtKey =
//   process.env.JWT_SECRET ||
//   'add a .env file to root of project with the JWT_SECRET variable';
//moved above to secret.js and re-required it in


// quickly see what this file exports
module.exports = {
  authenticate,
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, secret.jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}