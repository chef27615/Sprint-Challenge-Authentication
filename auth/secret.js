
module.exports ={
jwtKey :
  process.env.JWT_SECRET ||
  'this is a secret'
}